The [RgbItem](https://api.drupal.org/api/examples/field%5Fexample%21src%21Plugin%21Field%21FieldType%21RgbItem.php/class/RgbItem/8) from the field\_example module under the [examples project](https://www.drupal.org/project/examples):

```php
<?php

namespace Drupal\field_example\Plugin\Field\FieldType;

use Drupal\Core\Field\FieldItemBase;
use Drupal\Core\Field\FieldStorageDefinitionInterface;
use Drupal\Core\TypedData\DataDefinition;

/**
 * Plugin implementation of the 'field_example_rgb' field type.
 *
 * @FieldType(
 *   id = "field_example_rgb",
 *   label = @Translation("Example Color RGB"),
 *   module = "field_example",
 *   description = @Translation("Demonstrates a field composed of an RGB color."),
 *   default_widget = "field_example_text",
 *   default_formatter = "field_example_simple_text"
 * )
 */
class RgbItem extends FieldItemBase {

  /**
   * {@inheritdoc}
   */
  public static function schema(FieldStorageDefinitionInterface $field_definition) {
    return [
      'columns' => [
        'value' => [
          'type' => 'text',
          'size' => 'tiny',
          'not null' => FALSE,
        ],
      ],
    ];
  }

  /**
   * {@inheritdoc}
   */
  public static function propertyDefinitions(FieldStorageDefinitionInterface $field_definition) {
    $properties['value'] = DataDefinition::create('string')->setLabel(t('Hex value'));

    return $properties;
  }

  /**
   * {@inheritdoc}
   */
  public function isEmpty() {
    $value = $this->get('value')->getValue();
    return $value === NULL || $value === '';
  }

}

```