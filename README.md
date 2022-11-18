# About

This repository contains a customized reactUI for the [VisionX](https://visionx.sibvisions.com) application Delivery service. 

The application is available in VisionX' marketplace for free. It already contains the customized react UI.

## What is customized?

### Custom Components
The application contains one screen. In this screen, we replaced two number editors (Rating and Minimum Order Value) with our own react components.

For the rating, a rating component was used, which displays the number value as stars. You can set the value by pressing the stars.

For the minimum order value, a slider was used, which can set the minimum order value by sliding the slider.

#### **Before**
![custom-scren-before-image](./src/readme-images/custom-components-image-before.PNG)

#### **After**

![custom-components-image](./src/readme-images/custom-components-image.PNG)

The source can be found [here.](https://github.com/sibvisions/visionx.reactUI.deliveryService/blob/main/src/screen-wrappers/ScreenWrapperRestaurants.tsx)

[Click here](https://github.com/sibvisions/reactUI.example/tree/main/src/readme-files/custom-component) for more information about custom-components.

### Custom Screen
Additionally a custom-screen was added which isn't in the default application. 

This custom-screen is a simple react-component which contains a ListBox where you can select different values. Next to it is a gallery which will then display the correct images based on the value.

![custom-screen-image](./src/readme-images/custom-screen-image.PNG)

The source can be found [here.](https://github.com/sibvisions/visionx.reactUI.deliveryService/blob/main/src/CustomRestaurantScreen.tsx)

[Click here](https://github.com/sibvisions/reactUI.example/tree/main/src/readme-files/custom-screen) for more information about custom-screens.

Image source: [https://www.pexels.com](https://www.pexels.com)