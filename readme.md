# Pico y Placa

An app to let you know if your car can circulate in [Quito](https://es.wikipedia.org/wiki/Quito) given the city's ["Pico y Placa"](http://www.amt.gob.ec/index.php/pico-placa-homepage.html) constraints.

## Design approach & assumptions

This app was done intentionally with an object oriented design to test the language's object orientation capabilities. Though I still believe that a mix of paradigms, with functional programming as a priority, suits it better.

To know if a car is restricted from circulation, There are the following rules:

- The day must be a weekday.
- The time must be between 7:00 am and 9:30 am in the mornings and between 4:00 pm and 7:30 pm in the afternoons.
- The car plate must match the following set of rules:
  - Mondays: plate ends in '1' or '2'
  - Tuesdays: plate ends in '3' or '4'
  - Wednesdays: plate ends in '5' or '6'
  - Thursdays: plate ends in '7' or '8'
  - Fridays: plate ends in '9' or '0'

Also, the app needs a text file with new-line separated inputs with the following sample format:

```
PCB-1041 2018-07-16 18:35
```

Where the first word is the car plate, the second one is a date and the third is a time of the day.

If the input line is incomplete or invalid, the program will answer: "Invalid car data".

## Requirements

- Node v6+

## To run the application

```sh
$ ./src/main.js <file_path>
```

For example, here's how to do it with the sample input:

```sh
$ ./src/main.js input.txt
```

## To run all tests

```sh
$ npm test
```

## Known issues

For now, there is not enogh validation for when the file input contains an invalid date. So if for example, the input contains a line with `"abc abc abc"`, the program will answer with `"abc Invalid date Invalid date - Yes"`.
