import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        brightness: Brightness.light,
        primarySwatch: Colors.green,
        visualDensity: VisualDensity.adaptivePlatformDensity
      ),
      darkTheme: ThemeData(
          brightness: Brightness.dark,
          primarySwatch: Colors.green,
          visualDensity: VisualDensity.adaptivePlatformDensity
      ),
      home: MyHomePage(title: 'SpotiSync'),
    );
  }
}
