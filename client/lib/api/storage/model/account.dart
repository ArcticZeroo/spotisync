class AccountModel {
  String id;
  String displayName;

  Map<String, dynamic> serialize() {
    return {'id': id, 'displayName': displayName};
  }
}
