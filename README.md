# Month Data Viewer
## Overview
The Month Data Viewer is a web-based application that provides users with a visually appealing interface to view monthly data such as temperature, precipitation, humidity, and notable events. The application allows users to select one or multiple months to display relevant information using a combination of text and images. '

![Explore Monthly Trends (1)](https://github.com/areeba0/Month-Explorer-Display-information-of-Events-for-Each-Month-using-HTML-CSS-and-JS/assets/136759791/cfeb01fe-d6cb-40ba-b9a6-1d19327400fd)

# Features
## 1. Single or Multiple Month View
- Single Month View: Allows users to select and view detailed information for a specific month.
- Multiple Month View: Enables users to simultaneously view data for multiple months.
  
## 2. Interactive UI Components
- Radio Buttons: Toggle between single and multiple-month view options.
- Checkboxes: Select specific months to display when in multiple-month view mode.
- Dynamic Button: Triggers the display of selected month's data.
  
## 3. Visual and Textual Data Display
- Images: Each month’s data is accompanied by a relevant image.
- Textual Data: Detailed information including temperature, precipitation, humidity, and key events for the selected month(s).
  
## 4. Responsive Design
- Flexbox Layout: Ensures a consistent and adaptive layout across various screen sizes.
- Media Queries: Adjusts the number of tiles per row based on the screen width.
  
## 5. Animations
- Slide-in Animation: Smooth entry for the body and container elements.
- Button Hover Animation: Subtle color transition effect on button hover.

# Implementations
## HTML Structure
- Containers: Main content containers for holding month selection options and output.
- Input Elements: Radio buttons for view selection, checkboxes for month selection.
- Buttons: A button to trigger the viewing of the selected month's data.
  
## CSS Styling
- Background: A visually engaging background image covering the entire webpage.
- Flexbox Layout: For aligning tiles and handling responsiveness.
- Animations: Keyframes for slide-in effects and smooth transitions.
- Color Scheme: Light pink, orange, and green colors for interactive elements and text.
  
## JavaScript Functionality
- Data Object: Holds the information for each month.
- Event Listeners: For handling user interactions with radio buttons and checkboxes.
- Dynamic Content Generation: Functions to create and insert tiles into the DOM based on user selections.
