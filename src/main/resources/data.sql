INSERT INTO EMPLOYEE (id, username, uuid, first_name, last_name, application_date, pesel, password, enabled, version) VALUES
  (1, 'admin', 'cc314fde-55f8-11e8-a223-83a9e3050b7d', 'admin', 'admin', 2018-03-23, '01234567899', '$2a$10$Lknt1mPs8Y.LdN7O9.be8u6agUFRUTNOoV.eJTAjVWgyxB/l9vfNW', true, 1),
  (2, 'user', 'fe0571b6-55f8-11e8-90c6-8f5268d969c4', 'user', 'user', 2018-03-23, '11234567899', '$2a$10$Lknt1mPs8Y.LdN7O9.be8u6agUFRUTNOoV.eJTAjVWgyxB/l9vfNW', true, 1),
  (3, 'michal', '20f99a80-55f9-11e8-b0df-c31eed37abe8', 'michal', 'michal', 2018-03-23, '21234567899', '$2a$10$Lknt1mPs8Y.LdN7O9.be8u6agUFRUTNOoV.eJTAjVWgyxB/l9vfNW', false, 1);

INSERT INTO LINE (id, name, uuid, version) VALUES
  (1, 'line1', 'cc314fde-55f8-11e8-a223-83a9e3050b7d', 1),
  (2, 'line2', 'fe0571b6-55f8-11e8-90c6-8f5268d969c4', 1);

INSERT INTO BUS_TYPE (id, name, uuid, version) VALUES
  (1, 'type1', 'cc314fde-55f8-11e8-a223-83a9e3050b7d', 1),
  (2, 'type2', 'fe0571b6-55f8-11e8-90c6-8f5268d969c4', 1);

INSERT INTO BUS_STOP_TYPE (id, name, uuid, version) VALUES
  (1, 'stop type1', 'cc314fde-55f8-11e8-a223-83a9e3050b7d', 1),
  (2, 'stop type2', 'fe0571b6-55f8-11e8-90c6-8f5268d969c4', 1);

INSERT INTO BUS (id, line_id, uuid, vin, number, side_number, version) VALUES
  (1, 1, 'cc314fde-55f8-11e8-a223-83a9e3050b7d', '123123', 'lo 22222', '2031', 1),
  (2, 1, 'fe0571b6-55f8-11e8-90c6-8f5268d969c4', '123123', 'lo 22224', '2032', 1),
  (3, 2, '20f99a80-55f9-11e8-b0df-c31eed37abe8', '123123', 'lo 22223', '2033', 0);
