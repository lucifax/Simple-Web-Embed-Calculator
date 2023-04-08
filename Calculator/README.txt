This is a simple web calculator with webembedding. Put all the files in the same folder and run the HTML file to test it. 

To embed the calculator into another website, include the calculator-component.js and styles.css files in the HTML file where you want to embed the calculator, and then use the <calculator-component> custom element:
CODE ON HTML PAGE:

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Embedded Calculator</title>
  <link rel="stylesheet" href="your/styles.css">
</head>
<body>
  <calculator-component></calculator-component>
  <script src="your/calculator-component.js"></script>
</body>
</html>

Replace your/styles.css and your/calculator-component.js with the actual paths to your CSS and JavaScript files.

When you open the HTML file in a web browser, the calculator component will be embedded and fully functional. This method allows you to easily include the calculator component in multiple places on your website or share it with others to use on their websites. 

-Lucifax