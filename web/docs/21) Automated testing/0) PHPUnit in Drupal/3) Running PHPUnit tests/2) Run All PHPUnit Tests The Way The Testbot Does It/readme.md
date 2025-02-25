Running tests as described above is quick and easy, but it can be helpful to see how the drupal.org testbot runs your tests. This takes considerably longer but helps you understand things from the testbot's point of view.

The first step is to make sure you have a fully working Drupal installation, with the Testing module enabled. The drupal.org testbot assumes that contributed modules will be installed inside the `modules/contrib` directory and Drupal's application root for unit tests is set to a value assuming this directory structure.

Then, from the command line you can type:

`php core/scripts/run-tests.sh PHPUnit`

This specifies the _run-tests.sh_ script should run the PHPUnit group of tests. This group is internally generated by the script and its integration with SimpleTest and represents any test that inherits `\PHPUnit_Framework_TestCase` including `Drupal\Tests\UnitTestCase`.

When using a base URL other than <http://localhost> the script requires a `--url` parameter

`--url
   The base URL of the root directory of this Drupal checkout`

For example:

```php
php core/scripts/run-tests.sh --url http://drupal8.dev PHPUnit
```

Do not use `core/scripts/run-tests.sh` for Javascript tests. When ChromeDriver is not running, it will say tests passed when in fact they did not run. [Use phpunit directly.](/docs/automated-testing/phpunit-in-drupal/running-phpunit-javascript-tests)

### What to do with skipped tests

Skipped tests are usually an indication that your test environment is missing something, often a database connection. You can get more information about the skipped test by adding the `-v` parameter to your `phpunit` command.

If you get an error similar to:

```php
InvalidArgumentException: There is no database connection so no tests can be run. You must provide a SIMPLETEST_DB environment variable, like "sqlite://localhost//tmp/test.sqlite", to run PHPUnit based functional tests outside of run-tests.sh. 
```

That means you have not set up your local phpunit.xml file copy correctly, see the kernel tests and browser tests section above.

### Tests found when calling PHPUnit directly, but no tests found by drupal.org's testbot

The Drupal test runner (`core/scripts/run-tests.sh`) discovers tests in a different way than running PHPUnit directly. Confirm that your test conforms to the Drupal test runner standard as documented in [PHPUnit file structure, namespace, and required metadata: Contributed Modules](https://www.drupal.org/node/2116043#contributed-modules " Contributed Modules").

Most likely the Drupal test runner is not able to find your class in the autoloader, which means that the namespace and directory do not conform to the PSR-4 standard.

### Tests pass locally but fail when run by drupal.org's testbot

One possible explanation for this is that you are introducing a new dependency to your module and testbot is not yet aware of this. If this is the case consider adding a [test\_dependencies property](https://www.drupal.org/node/2000204#s-complete-example) to your `mymodule.info.yml` file and committing it immediately. After pushing this change to drupal.org it can take up to 24 hours for testbot to become aware of your new dependency.

Another reason for locally-passing tests failing on the testbot is that locally you may be using a later 'dev' version of a 3rd-party dependency module, but the Drupal testbot is using only the most recent tagged release. If code changes have been made in the dev release which are necessary for your tests to pass, these will not be available to testbot in the official tagged release of the dependency module and could be the cause of the failures.

Using `__DIR__` or `UnitTestCase::$root` to check the Drupal root may fail when your test assumes that the module is _not_ underneath a `modules/contrib` directory. You can override this behavior in your test classes (see `UnitTestCase::__construct`).

One thing to check is the PHP and database versions. Some modules may support older versions of PHP, while Drupal may not support them. [View PHP support for Drupal.](https://www.drupal.org/docs/8/system-requirements/php-requirements) It is a good idea to check to make sure that the automated test on drupal.org matches PHP and database versions of what you have locally.

Another thing may help in certain cases is that drupal.org's testbot runs tests in a subdirectory Drupal setup, for certain path related logic if it can not handle subdirectory properly, it might cause the failure. 

Have another possible explanation for this mismatch? Add it here...