// Встроенный модуль http поддерживает
// функциональность HTTP-сервера и HTTP-клиента
var http = require('http');

// Встроенный модуль fs поддерживает 
// функциональность файловой системы
var fs = require('fs');

// Встроенный модуль path поддерживает
// функциональность, связанную с путями файловой системы
var path = require('path');

// Дополнительный модуль mime поддерживает порождение
// MIME-типов на основе расширения имен файлов
var mime = require('mime');

// Объект cache реализует хранение содержимого 
// кэшированных файлов
var cache = {};