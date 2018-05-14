INSERT INTO EMPLOYEE (id, username, uuid, first_name, last_name, pesel, password, enabled) VALUES
  (1, 'admin', 'cc314fde-55f8-11e8-a223-83a9e3050b7d', 'admin', 'admin', '01234567899', '$2a$10$Lknt1mPs8Y.LdN7O9.be8u6agUFRUTNOoV.eJTAjVWgyxB/l9vfNW', true),
  (2, 'user', 'fe0571b6-55f8-11e8-90c6-8f5268d969c4', 'user', 'user', '11234567899', '$2a$10$Lknt1mPs8Y.LdN7O9.be8u6agUFRUTNOoV.eJTAjVWgyxB/l9vfNW', true),
  (3, 'michal', '20f99a80-55f9-11e8-b0df-c31eed37abe8', 'michal', 'michal', '21234567899', '$2a$10$Lknt1mPs8Y.LdN7O9.be8u6agUFRUTNOoV.eJTAjVWgyxB/l9vfNW', false);

INSERT INTO LINE (id, name, uuid) VALUES
  (1, 'line1', 'cc314fde-55f8-11e8-a223-83a9e3050b7d'),
  (2, 'line2', 'fe0571b6-55f8-11e8-90c6-8f5268d969c4');

INSERT INTO BUS_TYPE (id, name, uuid) VALUES
  (1, 'type1', 'cc314fde-55f8-11e8-a223-83a9e3050b7d'),
  (2, 'type2', 'fe0571b6-55f8-11e8-90c6-8f5268d969c4');

INSERT INTO BUS_STOP_TYPE (id, name, uuid) VALUES
  (1, 'stop type1', 'cc314fde-55f8-11e8-a223-83a9e3050b7d'),
  (2, 'stop type2', 'fe0571b6-55f8-11e8-90c6-8f5268d969c4');

INSERT INTO BUS (id, line_id, uuid, vin, number, side_number, bus_type_id) VALUES
  (1, 1, 'cc314fde-55f8-11e8-a223-83a9e3050b7d', '123123', 'lo 22222', '2031', 1),
  (2, 1, 'fe0571b6-55f8-11e8-90c6-8f5268d969c4', '123123', 'lo 22224', '2032', 2),
  (3, 2, '20f99a80-55f9-11e8-b0df-c31eed37abe8', '123123', 'lo 22223', '2033', 1);
