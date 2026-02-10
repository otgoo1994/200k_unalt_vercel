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
    label: '=CONCATENATE("M", "S", " Office") функцийн үр дүн?',
    answers: [
      { label: "M S Office", answerYn: false },
      { label: "MS Office", answerYn: true },
      { label: "MS-Office", answerYn: false },
      { label: "Error", answerYn: false },
    ],
  },
  {
    id: 2,
    category: 1, // Word
    level: 1,
    label:
      'Word баримтыг PDF болгон хадгалахын тулд "Save As" цэснээс гадна аль цэсийг ашиглаж болох вэ?',
    answers: [
      { label: "Print", answerYn: false },
      { label: "Export", answerYn: true },
      { label: "Share", answerYn: false },
      { label: "Info", answerYn: false },
    ],
  },
  {
    id: 3,
    category: 2, // Гарны хослол
    level: 2,
    label: "Alt + Tab товчлуур юу хийдэг вэ?",
    answers: [
      { label: "Шинэ цонх нээнэ", answerYn: false },
      { label: "Нээлттэй цонхнуудын хооронд шилжинэ", answerYn: true },
      { label: "Цонхыг хаана", answerYn: false },
      { label: "Цонхыг жижигрүүлнэ", answerYn: false },
    ],
  },
  {
    id: 4,
    category: 5, // Компьютер
    level: 2,
    label: "Процессорын хурдыг (Clock Speed) ямар нэгжээр хэмждэг вэ?",
    answers: [
      { label: "GB", answerYn: false },
      { label: "MB", answerYn: false },
      { label: "GHz", answerYn: true },
      { label: "RPM", answerYn: false },
    ],
  },
  {
    id: 5,
    category: 4, // Аюулгүй байдал
    level: 3,
    label: '"Adware" гэж юу вэ?',
    answers: [
      { label: "Вирусны эсрэг програм", answerYn: false },
      {
        label: "Хүсээгүй зар сурталчилгааг автоматаар харуулдаг програм",
        answerYn: true,
      },
      { label: "Тоглоом", answerYn: false },
      { label: "Хакерын бүлэг", answerYn: false },
    ],
  },
  {
    id: 6,
    category: 7, // Интернэт
    level: 3,
    label: '"Upload" гэж юу вэ?',
    answers: [
      { label: "Интернэтээс файл татах", answerYn: false },
      { label: "Өөрийн компьютерээс интернэт рүү файл хуулах", answerYn: true },
      { label: "Програм суулгах", answerYn: false },
      { label: "Компьютер асаах", answerYn: false },
    ],
  },
  {
    id: 7,
    category: 3, // PowerPoint
    level: 4,
    label: "Слайд дээрх объектуудыг бүлэглэх (Group) товчлол?",
    answers: [
      { label: "Ctrl + E", answerYn: false },
      { label: "Ctrl + G", answerYn: true },
      { label: "Shift + G", answerYn: false },
      { label: "Alt + G", answerYn: false },
    ],
  },
  {
    id: 8,
    category: 0, // Excel
    level: 4,
    label:
      "Excel-д баганын өргөнийг тухайн нүдэн дэх текстийн уртад тохируулан автоматаар сунгахын тулд хаана товших вэ?",
    answers: [
      { label: "Баганын толгой дээр баруун товших", answerYn: false },
      { label: "Баганын үсгийн зааг дээр хоёр удаа товших", answerYn: true },
      { label: "Format Cells цэс рүү орох", answerYn: false },
      { label: "Wrap Text товчийг дарах", answerYn: false },
    ],
  },
  {
    id: 9,
    category: 2, // Гарны хослол
    level: 5,
    label: 'Word дээр "Find" (Хайх) цонхыг нээх товчлол?',
    answers: [
      { label: "Ctrl + F", answerYn: true },
      { label: "Ctrl + K", answerYn: false },
      { label: "Alt + F", answerYn: false },
    ],
  },
  {
    id: 10,
    category: 6, // Ёс зүй
    level: 5,
    label: '"Trolling" гэж юу вэ?',
    answers: [
      {
        label: "Хүмүүсийн дургүйг хүргэх зорилгоор өдөөн хатгах",
        answerYn: true,
      },
      { label: "Мэдээлэл хайх", answerYn: false },
      { label: "Тоглоом тоглох", answerYn: false },
    ],
  },
  {
    id: 11,
    category: 5, // Компьютер
    level: 6,
    label: '"Taskbar" гэж юу вэ?',
    answers: [
      { label: "Дэлгэцийн зураг", answerYn: false },
      {
        label: "Нээлттэй програмууд харагддаг мөр",
        answerYn: true,
      },
      { label: "Хулганы заагч", answerYn: false },
    ],
  },
  {
    id: 12,
    category: 1, // Word
    level: 6,
    label: '"Ruler" (Шугам) харагдахгүй байвал аль цэснээс идэвхжүүлэх вэ?',
    answers: [
      { label: "Home", answerYn: false },
      { label: "View", answerYn: true },
      { label: "Layout", answerYn: false },
    ],
  },
  {
    id: 13,
    category: 0, // Excel
    level: 7,
    label: "=MIN(15, 5, 25) функцийн хариу?",
    answers: [
      { label: "15", answerYn: false },
      { label: "5", answerYn: true },
      { label: "45", answerYn: false },
    ],
  },
  {
    id: 14,
    category: 4, // Аюулгүй байдал
    level: 7,
    label: '"Patch" эсвэл "Update" хийх нь аюулгүй байдалд яагаад чухал вэ?',
    answers: [
      { label: "Шинэ дизайнтай болно", answerYn: false },
      {
        label: "Програмын цоорхой, алдааг засаж, хакердах эрсдэлийг бууруулна",
        answerYn: true,
      },
      { label: "Компьютер хурдан болно", answerYn: false },
    ],
  },
  {
    id: 15,
    category: 7, // Интернэт
    level: 8,
    label: "ISP гэж юу вэ?",
    answers: [
      {
        label: "Internet Service Provider",
        answerYn: true,
      },
      { label: "Internal Server Port", answerYn: false },
    ],
  },
  {
    id: 16,
    category: 3, // PowerPoint
    level: 8,
    label: '"Slide Transition" дээр "Apply to All" дарах нь ямар үр дүнтэй вэ?',
    answers: [
      {
        label: "Сонгосон шилжилт бүх слайдад ижил хийгдэнэ",
        answerYn: true,
      },
      { label: "Бүх слайдын өнгө солигдоно", answerYn: false },
    ],
  },
];
