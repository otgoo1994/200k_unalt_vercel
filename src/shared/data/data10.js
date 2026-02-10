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
    category: 0,
    level: 1,
    label: '=UPPER("excel") функцийн үр дүн?',
    answers: [
      { label: "excel", answerYn: false },
      { label: "EXCEL", answerYn: true },
      { label: "Excel", answerYn: false },
      { label: "Error", answerYn: false },
    ],
  },
  {
    id: 2,
    category: 1,
    level: 1,
    label: "Текстийн доогуур зураас татах (Underline) товчлол?",
    answers: [
      { label: "Ctrl + B", answerYn: false },
      { label: "Ctrl + I", answerYn: false },
      { label: "Ctrl + U", answerYn: true },
      { label: "Ctrl + L", answerYn: false },
    ],
  },
  {
    id: 3,
    category: 2,
    level: 2,
    label: "Ctrl + X товчлуур юу хийдэг вэ?",
    answers: [
      { label: "Cut (Тасдаж авах)", answerYn: true },
      { label: "Copy", answerYn: false },
      { label: "Paste", answerYn: false },
      { label: "Close", answerYn: false },
    ],
  },
  {
    id: 4,
    category: 5,
    level: 2,
    label: '"Folder" (Хавтас)-ийн үндсэн үүрэг?',
    answers: [
      { label: "Файлуудыг эмх цэгцтэй хадгалах, ангилах", answerYn: true },
      { label: "Файл үүсгэх", answerYn: false },
      { label: "Файл устгах", answerYn: false },
      { label: "Файл нээх", answerYn: false },
    ],
  },
  {
    id: 5,
    category: 4,
    level: 3,
    label: "Хүчтэй нууц үгэнд юу орох ёстой вэ?",
    answers: [
      {
        label: "Том жижиг үсэг, тоо, тусгай тэмдэгт холилдсон урт дараалал",
        answerYn: true,
      },
      { label: "Зөвхөн тоо", answerYn: false },
      { label: "Зөвхөн үсэг", answerYn: false },
      { label: "Өөрийн нэр", answerYn: false },
    ],
  },
  {
    id: 6,
    category: 7,
    level: 3,
    label: '"Search Engine" (Хайлтын систем)-д аль нь хамаарах вэ?',
    answers: [
      { label: "Google, Bing, Yahoo", answerYn: true },
      { label: "Windows", answerYn: false },
      { label: "Office", answerYn: false },
      { label: "Photoshop", answerYn: false },
    ],
  },
  {
    id: 7,
    category: 3,
    level: 4,
    label: "PowerPoint дээр слайд дээрх текстийн үсгийн хэмжээг өөрчлөх хэсэг?",
    answers: [
      { label: "Font", answerYn: true },
      { label: "Paragraph", answerYn: false },
      { label: "Drawing", answerYn: false },
      { label: "Editing", answerYn: false },
    ],
  },
  {
    id: 8,
    category: 0,
    level: 4,
    label: "=A1+B1 томьёо юу хийх вэ?",
    answers: [
      { label: "A1, B1 нүднүүдийн тоон утгыг нэмнэ", answerYn: true },
      { label: "A1, B1 нүднүүдийг нэгтгэнэ", answerYn: false },
      { label: "Үржүүлнэ", answerYn: false },
      { label: "Хуваана", answerYn: false },
    ],
  },
  {
    id: 9,
    category: 2,
    level: 5,
    label: "Ctrl + P товчлуур юу хийдэг вэ?",
    answers: [
      { label: "Print (Хэвлэх)", answerYn: true },
      { label: "Paste", answerYn: false },
      { label: "Paint", answerYn: false },
    ],
  },
  {
    id: 10,
    category: 6,
    level: 5,
    label:
      "Бусдын зургийг зөвшөөрөлгүй авч, янзалж (meme болгож) тараах нь зөв үү?",
    answers: [
      { label: "Үгүй, хувийн нууцад халдсан хэрэг болно", answerYn: true },
      { label: "Тийм, хөгжилтэй", answerYn: false },
      { label: "Хамаагүй", answerYn: false },
    ],
  },
  {
    id: 11,
    category: 5,
    level: 6,
    label: "Компьютерийг бүрэн унтраах команд?",
    answers: [
      { label: "Shut Down", answerYn: true },
      { label: "Restart", answerYn: false },
      { label: "Sleep", answerYn: false },
    ],
  },
  {
    id: 12,
    category: 1,
    level: 6,
    label: "Шинэ хуудас эхлүүлэх (Page Break) товчлол?",
    answers: [
      { label: "Ctrl + Enter", answerYn: true },
      { label: "Shift + Enter", answerYn: false },
      { label: "Alt + Enter", answerYn: false },
    ],
  },
  {
    id: 13,
    category: 0,
    level: 7,
    label: '=LOWER("Word") функцийн үр дүн?',
    answers: [
      { label: "word", answerYn: true },
      { label: "WORD", answerYn: false },
      { label: "Word", answerYn: false },
    ],
  },
  {
    id: 14,
    category: 4,
    level: 7,
    label: "Танихгүй хүнээс ирсэн файлын хавсралтыг нээх нь аюултай юу?",
    answers: [
      { label: "Тийм, вирус байх магадлалтай", answerYn: true },
      { label: "Үгүй", answerYn: false },
      { label: "Зөвхөн зураг бол аюулгүй", answerYn: false },
    ],
  },
  {
    id: 15,
    category: 7,
    level: 8,
    label: '"Hyperlink" гэж юу вэ?',
    answers: [
      { label: "Дарахад өөр хуудас руу шилждэг холбоос", answerYn: true },
      { label: "Текстийн өнгө", answerYn: false },
    ],
  },
  {
    id: 16,
    category: 3,
    level: 8,
    label: "Шинэ слайд нэмэх товчлол?",
    answers: [
      { label: "Ctrl + M", answerYn: true },
      { label: "Ctrl + N", answerYn: false },
    ],
  },
];
