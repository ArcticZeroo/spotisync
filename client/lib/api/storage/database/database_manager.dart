import 'dart:io';

import 'package:path/path.dart';
import 'package:sqflite/sqflite.dart';

class DatabaseManager {
  final String dbDirectoryName = 'trigger';
  final String dbPathName = 'trigger.db';

  Database _db;
  bool get isOpen => _db != null && _db.isOpen;
  int get _version => 1;

  Future<void> init() async {
    if (_db != null) {
      return;
    }

    String dbDirectoryPath = join(await getDatabasesPath(), dbDirectoryName);
    await Directory(dbDirectoryPath).create(recursive: true);

    String dbPath = join(dbDirectoryPath, dbPathName);
    _db = await openDatabase(dbPath, version: _version);
  }

  Future<Database> getDatabase() async {
    await init();

    if (!isOpen) {
      throw StateError('Database did not open on init');
    }

    return _db;
  }
}
