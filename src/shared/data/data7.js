export const categories = [
  { id: 0, name: "Excel" },
  { id: 1, name: "Word" },
  { id: 2, name: "Гарны хослол" },
  { id: 3, name: "PowerPoint" },
  { id: 4, name: "Аюулгүй байдал" },
  { id: 5, name: "Компьютер" },
  { id: 6, name: "Ёс зүй" },
  { id: 7, name: "Интернэт" },
];

export const questions = [
  {
    id: 1,
    category: 0, // Excel
    level: 1,
    label: "=NOW() функц ямар үр дүн үзүүлдэг вэ?",
    answers: [
      { label: "Зөвхөн огноо", answerYn: false },
      { label: "Огноо болон цаг", answerYn: true },
      { label: "Зөвхөн цаг", answerYn: false },
      { label: "Өчигдрийн огноо", answerYn: false },
    ],
  },
  {
    id: 2,
    category: 1, // Word
    level: 1,
    label: '"Watermark"-ийг ихэвчлэн ямар зорилгоор ашигладаг вэ?',
    answers: [
      { label: "Хуудсыг дугаарлах", answerYn: false },
      {
        label:
          "Баримтын нууцлал, статусыг (Draft, Confidential) бүдэг харуулах",
        answerYn: true,
      },
      { label: "Текстийг тод болгох", answerYn: false },
      { label: "Зураг оруулах", answerYn: false },
    ],
  },
  {
    id: 3,
    category: 2, // Гарны хослол
    level: 2,
    label: "Windows дээр Windows + L товчлуур юу хийдэг вэ?",
    answers: [
      { label: "Log out хийнэ", answerYn: false },
      { label: "Дэлгэцийг түгжинэ (Lock)", answerYn: true },
      { label: "Language солино", answerYn: false },
      { label: "Гэрэл багасгана", answerYn: false },
    ],
  },
  {
    id: 4,
    category: 5, // Компьютер
    level: 2,
    label: "Компьютерийн хурдад хамгийн их нөлөөлдөг 3 үндсэн үзүүлэлт?",
    answers: [
      { label: "Monitor, Keyboard, Mouse", answerYn: false },
      { label: "CPU, RAM, Hard Disk (SSD)", answerYn: true },
      { label: "Speaker, Mic, WebCam", answerYn: false },
      { label: "Case, Fan, Light", answerYn: false },
    ],
  },
  {
    id: 5,
    category: 4, // Аюулгүй байдал
    level: 3,
    label: "Нууц үгээ мартсан тохиолдолд сэргээх хамгийн найдвартай арга?",
    answers: [
      { label: "Шинэ хаяг нээх", answerYn: false },
      { label: "Бүртгэлтэй утас эсвэл и-мэйлээр код авах", answerYn: true },
      { label: "Найзаасаа асуух", answerYn: false },
      { label: "Тааж үзэх", answerYn: false },
    ],
  },
  {
    id: 6,
    category: 7, // Интернэт
    level: 3,
    label: "HTML хэлний үндсэн үүрэг?",
    answers: [
      { label: "Програм зохиох", answerYn: false },
      { label: "Вэб хуудасны бүтэц, агуулгыг тодорхойлох", answerYn: true },
      { label: "Өгөгдлийн сан удирдах", answerYn: false },
      { label: "Зураг зурах", answerYn: false },
    ],
  },
  {
    id: 7,
    category: 3, // PowerPoint
    level: 4,
    label: '"SmartArt"-ийг юунд ашиглавал хамгийн тохиромжтой вэ?',
    answers: [
      { label: "Зураг засахад", answerYn: false },
      { label: "Бүдүүвч, процесс, иерархи схем зурахад", answerYn: true },
      { label: "График байгуулахад", answerYn: false },
      { label: "Хүснэгт хийхэд", answerYn: false },
    ],
  },
  {
    id: 8,
    category: 0, // Excel
    level: 4,
    label: '=LEN("Microsoft") функцийн хариу?',
    answers: [
      { label: "8", answerYn: false },
      { label: "9", answerYn: true },
      { label: "10", answerYn: false },
      { label: "7", answerYn: false },
    ],
  },
  {
    id: 9,
    category: 2, // Гарны хослол
    level: 5,
    label: "Word дээр бүх текстийг сонгох (Select All) товчлол?",
    answers: [
      { label: "Ctrl + A", answerYn: true },
      { label: "Shift + A", answerYn: false },
      { label: "Alt + A", answerYn: false },
    ],
  },
  {
    id: 10,
    category: 6, // Ёс зүй
    level: 5,
    label: '"Copyright Infringement" гэж юу вэ?',
    answers: [
      { label: "Зохиогчийн эрх авах", answerYn: false },
      { label: "Зохиогчийн эрхийг зөрчих", answerYn: true },
      { label: "Лиценз худалдаж авах", answerYn: false },
    ],
  },
  {
    id: 11,
    category: 5, // Компьютер
    level: 6,
    label: "Driver (Драйвер) гэж юу вэ?",
    answers: [
      {
        label:
          "Техник хангамжийг үйлдлийн системтэй холбож ажиллуулдаг програм",
        answerYn: true,
      },
      { label: "Вирусны төрөл", answerYn: false },
      { label: "Тоглоомын удирдлага", answerYn: false },
    ],
  },
  {
    id: 12,
    category: 1, // Word
    level: 6,
    label: '"Drop Cap" гэж юу вэ?',
    answers: [
      { label: "Текстийг жижигрүүлэх", answerYn: false },
      {
        label: "Догол мөрийн эхний үсгийг томоор чимэглэж бичих",
        answerYn: true,
      },
      { label: "Текстийн доогуур зураас татах", answerYn: false },
    ],
  },
  {
    id: 13,
    category: 0, // Excel
    level: 7,
    label: "Excel-д багана нуух (Hide Column) товчлол?",
    answers: [
      { label: "Ctrl + 0", answerYn: true },
      { label: "Ctrl + H", answerYn: false },
      { label: "Alt + H", answerYn: false },
    ],
  },
  {
    id: 14,
    category: 4, // Аюулгүй байдал
    level: 7,
    label:
      '"Incognito Mode" нь таныг ISP (Интернэт үйлчилгээ үзүүлэгч)-ээс нууж чадах уу?',
    answers: [
      { label: "Тийм, бүрэн нууна", answerYn: false },
      {
        label:
          "Үгүй, зөвхөн таны компьютер дээр түүх хадгалагдахгүй, ISP бүгдийг харна",
        answerYn: true,
      },
      { label: "Тийм, гэхдээ удаан", answerYn: false },
    ],
  },
  {
    id: 15,
    category: 7, // Интернэт
    level: 8,
    label: '"Router" төхөөрөмжийн үүрэг?',
    answers: [
      { label: "Wi-Fi цацах", answerYn: false },
      {
        label:
          "Сүлжээнүүдийг хооронд нь холбож, өгөгдлийг зөв зам руу чиглүүлэх",
        answerYn: true,
      },
    ],
  },
  {
    id: 16,
    category: 3, // PowerPoint
    level: 8,
    label:
      "Үзүүлбэрийн үеэр зөвхөн тодорхой хэсгийг томруулж харуулах хэрэгсэл (Office 2013+)?",
    answers: [
      { label: "Zoom Slide", answerYn: false },
      { label: "Magnifier (Томруулдаг шил)", answerYn: true },
    ],
  },
];
