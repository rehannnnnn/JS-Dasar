/// Soal - 01
/// Kamu diminta untuk menjelaskan apa perbedaan antara
/// - Type Error
/// - Reference Error
/// - Range Error
/// - Syntax Error

/// WRITE YOUR ANALYSIS HERE
/*
Type Error adalah error yang muncul jika anda menggunakan nilai yang berada di luar kisaran tipe yang diharapkan,
Reference Error adalah error yang muncul ketika kita menggunakan referensi variabel yang belum dideklarasikan,
Range Error adalah error yang muncul ketika kita menggunakan angka yang berada diluar rentang nilai legal,
Syntax Error adalah error yang muncul ketika kita mencoba mengevaluasi kode dengan kesalahan sintaks.
*/

/// Soal - 02
/// Kamu diminta untuk melakukan analisa terhadap baris kode dibawah dengan instruksi detail sebagai berikut:
/// - apabila kita menjalankan baris kode dibawah apa yang akan terjadi?
/// - apabila terjadi error, termasuk dalam kategori manakah error tersebut?
/// - apabila terjadi error, jelaskan mengapa hal tersebut bisa terjadi

/// WRITE YOUR ANALYSIS HERE
// - yang terjadi ketika kode dibawah dijalankan adalah error
// - Reference Error
// - terjadi karena referensi variabel belum ditentukan
console.log(salaryWithVar)
console.log(salaryWithConst)

var salaryWithVar = 15000000;
const salaryWithConst = 15000000;
