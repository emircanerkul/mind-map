---
url: https://www.drupal.org/docs/extending-drupal/module-configuration
description: >-
  Go to the 'Extend' page if you are not already there. On the 'Extend' page,
  each table row is for one module, and begins on the left with a check-box,
  followed immediately to the right by the Module's name. To the right of the
  module name is a third column with the module's description. If you see the
  descriptions, jump down to 'Accordion' toggle for the descriptions ⤵ If you
  are not seeing descriptions If you are not seeing a description for each
  module to the right of its name, then your 'responsive' administration theme
  is hiding the descriptions.
published_time: '2017-01-21T18:58:00+00:00'
modified_time: '2021-12-05T07:09:05+00:00'
---
Go to the 'Extend' page if you are not already there.

On the 'Extend' page, each table row is for one module, and begins on the left with a check-box, followed immediately to the right by the Module's name.

To the right of the module name is a third column with the module's description.

If you see the descriptions, jump down to ['Accordion' toggle for the descriptions ⤵](#accordion%5Ftoggle%5Fdescr)

### If you are not seeing descriptions

If you are not seeing a description for each module to the right of its name, then your 'responsive' administration theme is hiding the descriptions.

The details of this problem and the details of its solution were discussed in [The fix to show hidden module descriptions on 'Extend' page](https://www.drupal.org/docs/8/extending-drupal-8/installing-drupal-8-modules#show%5Fmod%5Fdescript), but the following brief outline is a summary of those steps for resolving that situation.

#### Quick fix outline for hidden descriptions on the 'Extend' page

Close the left-hand vertical administrative menu if it is open.

If you are still not seeing the descriptions, then you need to do one of the three following things that were discussed in greater detail in [The fix to show hidden module descriptions on 'Extend' page](https://www.drupal.org/docs/8/extending-drupal-8/installing-drupal-8-modules#show%5Fmod%5Fdescript).

#### 'Accordion' toggle for the descriptions

On the 'Extend' page, at the table row for your new module, click the top line of its 'description' to fully expand the accordion toggle feature for its description.

At the bottom of the description, the links 'Help', 'Permissions', and 'Configure' will be displayed for your module when they are available.

Those links, however, will only be displayed after a module has been enabled.

#### Save time by not having to go hunting.

I consider the 'Extend' page to be the best place to establish whether or not a module has 'permissions' options, or 'configure' options, associated with it. And, conveniently, those are direct links to those options when applicable.

It is true that a configuration page for a module will be accessible from your site's 'Configuration' page, but you need to know ahead of time whether or not a configuration page for a module even exists, and then you need to know under what heading it is located on the 'Configuration' page.

Instead, I find the module on the 'Extend' page and check to see whether or not it has a 'Configure' link, which takes me directly to the configuration page.

It is also true that you can go to the 'Permissions' page via the Admin-menu item 'People' > "Permissions" to set permissions for a module, but it would be very helpful to know ahead of time whether or not permissions for a module even exist, and if so, it would also be helpful to know exactly under what heading name they are classified on the 'Permissions' page.

Instead, I find the module on the 'Extend' page and check to see whether or not it even has a 'Permissions' link, which takes me to the right spot on the 'Permissions' page.

### Module 'Help' link

The amount of readily available help documentation provided by the developers of a module varies between modules, both in terms of existence, depth of detail, and in its level of usefulness to new users.

Module documentation will be discussed in more detail below in the section "Module documentation and help", but for now, the 'Help' button found on the 'Extend' page will be briefly discussed in terms of its usefulness for module configuration.

On the 'Extend' page of your site, if for a particular module you see a "Help" link, click on it and see what you get.

The page that opens is being generated by your site, using information contained within your imported module folder.

I recommend that you at least scan the help page to get an idea of what it contains.

That page might contain details that will be relevant for you when you next use either the 'Permissions' or 'Configure' buttons for your module (if applicable).

Other module documentation and help options are discussed in [Module Documentation and Help](https://www.drupal.org/docs/8/extending-drupal-8/module-documentation-and-help).

When you are done exploring the 'Help' page, return to the 'Extend' page.

### Module 'Permissions' link

Not all modules have 'permissions' associated with them, but if a module does, you should be seeing a 'Permissions' link for the module to the right of its description on the 'Extend' page.

Whenever a module is first enabled on your site, the 'Administrator' role is automatically granted full permissions for that module.

Yet, some modules will require that you set permissions for the 'Anonymous user' and 'Authenticated user' roles to get a module to work for those roles in the manner that you want it to.

Permissions information for your new contrib module might have been at the 'Help' link discussed just above, or it might be in 'README.txt' or 'INSTALL.txt' files at the top level of the module folder as discussed in [Module Documentation and Help](https://www.drupal.org/docs/8/extending-drupal-8/module-documentation-and-help).

#### Permissions overview

If you have never been to the 'Permissions' page before, it would be helpful for you to have an idea of what it looks like as you read further.

To get to the 'Permissions' page, you can click on any one of the 'Permissions' links on the 'Extend' page; or, in your page-top admin menu, click "People", and at the "People" page, click the page-top tab (or link) labeled "Permissions".

By default, your Drupal site creates three permission levels, one for each type of basic site user: 'Anonymous user', 'Authenticated user', and 'Administrator'.

#### The 'Administrator' role user accounts

As you might guess, you are an 'Administrator', and as such, your account is granted the highest level of permissions allowed on your site: permission to do anything and everything.

The 'Administrator' role will always have all of the permissions granted to it, and it is not possible to remove a permission from the 'Administrator' role. (That is something different from Drupal 7.)

**The 'Authenticated user' role user accounts**

'Authenticated user' accounts are accounts that are created, for example, by complete strangers, who come to your site and register for an account.

When authenticated users are 'logged in' to their accounts, your site classifies them as having a role of 'Authenticated user', and they will be granted permission to do the things, but only the things, that you have set permissions for an 'Authenticated user' to do.

By default, the 'Authenticated user' role has relatively few permissions granted to it, but by default, an 'Authenticated user' can post comments, and use shortcuts.

#### The 'Anonymous user' role user accounts

An 'Anonymous user', however, can do little more, by default, than view site content, and use the site-wide contact form.

#### You are in control

You can change the various permissions for each role as you like.

You can also create any number of additional new accounts, and specify each account as being either an 'Authenticated user' account or an 'Administrator' account. You give each account a minimum of a username and password, though you might also assign an email address as well.

#### Additional user roles

In addition to the three user roles that come with Drupal core, you can create any number of additional user roles if, for example, you want individuals that you trust to be able to administer certain things, but you do not want them to have permission to administer everything on your site.

To create another user role, at the top of the 'Permissions' page, click the tab 'Roles', and near the bottom of that page, click the button 'Add role'.

#### Your module's permissions

If on the 'Extend' page, you have a 'Permissions' link for your module, click that.

The 'Permissions' page for your module is at `[drupal-root]/admin/people/permissions`

Whenever you click on one of the 'Permissions' links on the 'Extend' page, you will be taken to the 'Permissions' page at a point on the page with the first of the relevant permission(s) at the top of the window (There may be more than one permission associated with the module).

You might have to scroll up a line, bringing the window down a hair, because the permission you want might be hidden just under the admin-menu at the page's top.

Be aware, however, that if the 'Permissions' page should happen to present itself as being scrolled all the way down, then the permission you seek will probably not be at the top of your viewing window. In other words, since the page is down as far as it can go, and your specific permission is too near the bottom of the list, your permission, therefore, will not be at the top of the viewing window, but rather, somewhere in the middle of it.

The 'Administrator' column check-boxes (furthest to the right) will always be checked, and you can Not de-select them.

Whether or not you allow 'Anonymous' and/or 'Authenticated' users to have a particular permission is up to you.

If it is not clear to you what each permission is intended to control, and what the full implications might be behind allowing a permission for either 'Anonymous user' and/or 'Authenticated user', then please consult the 'Help' link for the module on the 'Extend' page (if the 'Help' link exists). Or, consult the 'README.txt' or 'INSTALL.txt' files at the top level of the module folder, as discussed, along with additional help options, in [Module Documentation and Help](https://www.drupal.org/docs/8/extending-drupal-8/module-documentation-and-help).

#### Module permissions security warning

Any permission that displays the following words, should only give given to individuals that you trust 100%.

```php
Warning: Give to trusted roles only; this permission has security implications. 
```

And, importantly, even though a permission does not have the full warning quoted above, if it uses the word 'Administer' in its first-column description, then that item might also be a huge security risk and should be given only to individuals you completely trust.

For example, the 'Taxonomy' permission reads, "Administer vocabularies", but it does not display the full warning above.

And yet, if you give someone permission to administer taxonomies, you will be giving them access to editing fields, which puts your site in jeopardy.

In conclusion, when a 'Permission' uses the word "Administer", only give it to those individuals who you completely trust.

Return to the 'Extend' page when you are done making changes on the 'Permissions' page.

### Module 'Configure' link

On the 'Extend' page, if the link 'Configure' is available for your new module, click that.

If the link 'Configure' does not exist, then your module has no configurable options.

If it is not clear to you what each configuration option is intended to control, and what the full implications are behind each option, then please consult the 'Help' link for that module on the 'Extend' page (if the 'Help' link exists). Or, consult the 'README.txt' file at the top-level folder of a contrib module, as will be discussed, along with additional help options, in [Module Documentation and Help](https://www.drupal.org/docs/8/extending-drupal-8/module-documentation-and-help).

* #### Larger browser window  
Make your browser window larger. If that does not work, or if it is not possible because, for example, you are on a mobile device...
* #### Smaller font  
Try making the font as small as you can, but still usable. If the descriptions still do not show up,...
* #### Set 'Stark' as the 'Administration theme'  
The 'Stark' theme comes with Drupal core and will reveal the 'descriptions' column, though you will have to scroll horizontally (left-right).  
Go to the 'Appearance' page, and click "Install" for the theme 'Stark' (Not "Install and set default")  
After the 'Appearance' page reloads, go to the bottom of the 'Appearance' page, set Stark as the 'Administration theme', and click "Save configuration".  
Return to the 'Extend' page.