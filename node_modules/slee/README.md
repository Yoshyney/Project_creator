# Slee v1.2
> Simple and yet amazing toast engine. Notifications have never been easier.

**NOTE:** This is work in progress, may contain bugs or be unstable. Please consider this before using in production.

## Features
- Small
- Simple to use
- Fast and beautiful out of the box
- Easy to install and use with npm or yarn
- Works with webpack

## Newest release v1.2.2
- Fixed responsive version
- Fixed progress bar after hover
- Fixed text opacity and picture wrapper background
- Larger close button on mobile devices

## How to install slee?
### npm and yarn
```javascript
npm install slee --save-dev
yarn add slee --dev
```
Then just require it in your project and you are good to go!

### CDN
In case you prefer using CDN services over hosting libraries locally, there is a option to use it.
```html
<script src="https://cdn.jsdelivr.net/npm/slee/dist/theme.js"></script>
<script src="https://cdn.jsdelivr.net/npm/slee/dist/slee.js"></script>
or both at once
<script src="https://cdn.jsdelivr.net/npm/slee/dist/bundle.js"></script>
```

### Add files manually
If you don't use any package manager and build tools, you can still download `dist/` files manually and include them
in your HTML.

## Usage / How to?
It's pretty simple. You don't have to be genius to use this library. Anyone can!

Slee supports 5 type of notifications: Neutral, Informative, Success, Warning and Danger (or something went wrong).

### Initialization
The first step is to configure and prepare Slee globally:
```javascript
Slee.configure({
    // ...options go here...
});

// and then
Slee.prepare();
```
Settings are saved and then used for every instance, if they are not overridden locally. Initial configuration is not
required at all. You can configure each instance manually, but we strongly recommend global configuration as it could
save a lot of lines of code.

### Methods
Methods are used to create new Slee instances or configure and prepare library before usage.

#### `configure(options)`
Used to configure the library globally, so you don't have to pass the same settings to every instance. You can also use
method `prepare()` instead.
```javascript
Slee.configure({});
```

#### `prepare(options)`
Prepares library before the first use. It can be also use to configure library. If so, you don't have to use `configure()`
method.
```javascript
Slee.prepare({});
```

#### `success(options)`
Creates notification of the success type. Usually used after successful action.
```javascript
Slee.success({});
```

#### `info(options)`
Creates notification of the informative type. Usually used to inform user about something useful.
```javascript
Slee.info({});
```

#### `warning(options)`
Creates notification of the warning type. Usually used to get users attention.
```javascript
Slee.warning({});
```

#### `error(options)`
Creates notification of the danger type. Usually used to inform user, that something went wrong.
```javascript
Slee.error({});
```

#### `neutral(options)`
Creates notification of the neutral type.
```javascript
Slee.neutral({});
```

#### `create()`
This method is a little bit special. It does not takes any parameters, but only uses those defined with `configure()`
or `prepare()` methods.
```javascript
Slee.create();
```

...aaaand that's all! No more methods.

### Options (configuration)
These options are used to configure Slee instances locally or globally.

#### `autoHide`
**Boolean | default: `true`**

When set to `true` all notifications expire after specified time.

#### `clickToHide`
**Boolean | default: `true`**

When set to `false`, notification can only be dismissed either after specified time or by clicking on the close button.

#### `hideDelay`
**Integer | default: `4000` | allowed: `1` or more**

Time in milliseconds after which the notification is automatically closed.

#### `type`
**String | default: `success` | allowed: `success`, `info`, `warning`, `error`, `neutral`**

Used within `create()` method to create notification of specified type.

#### `gap`
**Integer | default: `12` | allowed: `0` or more**

Size of gap between 2 notifications in px.

#### `position`
**String | default: 'top right' | allowed: `top right`, `top center`, `top left`, `bottom left`, `bottom center`,
`bottom right`**

Position on the screen where will be all pushed notifications displayed.

#### `closeButton`
**Boolean | default: `false`**

If set to `true`, close button in the right top corner will be displayed and enabled.

#### `progress`
**Boolean | default: `false`**

Shows progress bar in the bottom part of notification signalising how much time is left before auto dismiss.

#### `animation`
**String or Boolean | default: [Boolean] `false` | allowed: [Boolean] `false`, `ease`, `shrink`, `push`**

When set to `false`, notifications will not be animated.

#### `action`
**Funtion or Boolean | default: [Boolean] `false`**

Allows to set callback function that executes after user clicks on notification.

#### `redirect`
**String or Boolean | default: [Boolean] `false`**

Takes an URL. If specified, Slee opens a new tab with given URL after user clicks on notification.

#### `title`
**String or Boolean | default: [Boolean] `false`**

Title of notification

#### `description`
**String or Boolean | default: [Boolean] `false`**

Description of notification

#### `picture`
**String or Boolean | default: [Boolean] `false`**

You can also display icon or picture inside you notification!

#### `pointerEvents`
**Boolean | default: `false`**

When set to `true`, notifications gets blurry and see-through on hover.

## TODO list for possible v2.0
- Swipe to dismiss on mobile
- Enhance responsive version
- Option to use icon fonts inside as picture
- Reversing order of notifications
- Better redirect type
- Auto toast height
- Custom action buttons
- New "loading" type
- webpack 4
- Return instance after created to allow change notifications on the fly