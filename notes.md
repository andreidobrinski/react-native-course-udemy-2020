# React Native Notes

## StyleSheet.create

Helps with debugging misspelled styles, as opposed to inline styling. StyleSheet prefers an error over a warning

## FlatList

Keys

- key property must be a unique string (not a number)
- key can either be defined:
  - as the `key` property on the data object
  - in the `keyExtractor` fn on the FlatList

`horizontal={true}`: prop that allows you to scroll a list horizontally. can be combined with `showsHorizontalScrollIndicator={false}`

## Buttons

Button: simple button component

TouchableOpacity: original button component, customizable, can be used on any element
