<!DOCTYPE html>
<html>
<head>
    <title>NFL Quiz</title>
    <style>
        /* add some styles to make the quiz look nice */
        body {
            font-family: Arial, sans-serif;
            background-color: #f0f0f0;
        }
        h1 {
            text-align: center;
        }
        .question {
            font-size: 1.2em;
            margin-bottom: 10px;
        }
        .options label {
            display: block;
            margin-bottom: 5px;
        }
        .options input[type="radio"] {
            margin-right: 5px;
        }
        input[type="submit"] {
            background-color: #4CAF50;
            border: none;
            color: white;
            padding: 10px 20px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            margin-top: 10px;
            cursor: pointer;
        }
    </style>
</head>
<body>
    <h1>NFL Quiz</h1>
    <form action="#" method="post">
        <!-- use Python code to retrieve the questions from the database -->
        {% for question in questions %}
            <div
            
        {% endfor %}