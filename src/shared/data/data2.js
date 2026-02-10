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
    label:
      "$A1 гэсэн хаяглал хуулахад хэрхэн өөрчлөгдөх вэ? A) Багана, мөр хоёулаа өөрчлөгдөнө",
    answers: [
      {
        label: "Багана (A) өөрчлөгдөхгүй, мөр (1) өөрчлөгдөнө",
        answerYn: true,
      },
      {
        label: "Багана, мөр хоёулаа өөрчлөгдөнө ",
        answerYn: false,
      },
      {
        label: "Багана өөрчлөгдөж, мөр өөрчлөгдөхгүй",
        answerYn: false,
      },
      {
        label: "Хоёулаа өөрчлөгдөхгүй",
        answerYn: false,
      },
    ],
  },
  {
    id: 2,
    category: 1,
    level: 1,
    label: "Word хүснэгтийн нүднүүдийг нэгтгэх команд?",
    answers: [
      {
        label: "Split Cells ",
        answerYn: false,
      },
      {
        label: "Merge Cells ",
        answerYn: true,
      },
      {
        label: "Group ",
        answerYn: false,
      },
      {
        label: "Combine",
        answerYn: false,
      },
    ],
  },
  {
    id: 3,
    category: 2,
    level: 2,
    label: "Windows + D товчлуурын үүрэг?",
    answers: [
      {
        label: "Файл устгах",
        answerYn: false,
      },
      {
        label: "Дэлгэцийг харуулах",
        answerYn: true,
      },
      {
        label: "Шинэ цонх нээх",
        answerYn: false,
      },
      {
        label: "Тохиргоо руу орох",
        answerYn: false,
      },
    ],
  },
  {
    id: 4,
    category: 5,
    level: 2,
    label: "RAM болон ROM-ийн үндсэн ялгаа?",
    answers: [
      {
        label: "RAM нь удаан, ROM нь хурдан",
        answerYn: false,
      },
      {
        label: "ROM-д мэдээлэл бичиж болдог, RAM-д болдоггүй ",
        answerYn: false,
      },
      {
        label: "Ялгаагүй",
        answerYn: false,
      },
      {
        label: "RAM нь түр санах ой, ROM нь тогтмол санах ой ",
        answerYn: true,
      },
    ],
  },
  {
    id: 5,
    category: 4,
    level: 3,
    label:
      "Хүний сэтгэл зүйд нөлөөлж, итгэл үнэмшил төрүүлэх замаар нууц мэдээлэл авах аргыг юу гэдэг вэ?",
    answers: [
      {
        label: "Brute Force",
        answerYn: false,
      },
      {
        label: "Social Engineering",
        answerYn: true,
      },
      {
        label: "Malware",
        answerYn: false,
      },
      {
        label: "Spyware",
        answerYn: false,
      },
    ],
  },
  {
    id: 6,
    category: 7,
    level: 3,
    label: 'Хөтөч дээр "Cookie" гэж юу вэ? ',
    answers: [
      {
        label: "Вирус",
        answerYn: false,
      },
      {
        label: "Нууц горим",
        answerYn: false,
      },
      {
        label: "Зар сурталчилгаа ",
        answerYn: false,
      },
      {
        label: "Жижиг хэмжээний өгөгдөл хадгалах файл",
        answerYn: true,
      },
    ],
  },
  {
    id: 7,
    category: 3,
    level: 4,
    label:
      '"Morph" шилжилт (Transition) хийхийн тулд ямар нөхцөл шаардлагатай вэ? ',
    answers: [
      {
        label: "Слайд хоосон байх",
        answerYn: false,
      },
      {
        label: "Зөвхөн текст байх",
        answerYn: false,
      },
      {
        label: "Хоёр слайдад ижил объект байх шаардлагатай",
        answerYn: true,
      },
      {
        label: "Зөвхөн Office 2016, 2019 дээр ажиллана",
        answerYn: false,
      },
    ],
  },
  {
    id: 8,
    category: 5,
    level: 4,
    label: "C:\Users\Student\Desktop\Test.docx замд Desktop нь юу вэ?",
    answers: [
      {
        label: "Диск",
        answerYn: false,
      },
      {
        label: "Файл ",
        answerYn: false,
      },
      {
        label: "Хавтас",
        answerYn: true,
      },
      {
        label: "Өргөтгөл",
        answerYn: false,
      },
    ],
  },
  {
    id: 9,
    category: 0,
    level: 5,
    label: "=COUNTA(A1:A5) функц юуг тоолох вэ? ",
    answers: [
      {
        label: "Зөвхөн тоотой нүдийг",
        answerYn: false,
      },
      {
        label: "Хоосон биш бүх нүдийг",
        answerYn: true,
      },
      {
        label: "Хоосон нүдийг ",
        answerYn: false,
      },
    ],
  },
  {
    id: 10,
    category: 1,
    level: 5,
    label: "Word-д ^p тэмдэгт юуг илэрхийлдэг вэ (Find & Replace цонхонд)?",
    answers: [
      {
        label: "Page Break",
        answerYn: false,
      },
      {
        label: "Space",
        answerYn: false,
      },
      {
        label: "Paragraph Mark ",
        answerYn: true,
      },
    ],
  },
  {
    id: 11,
    category: 5,
    level: 6,
    label:
      "Компьютер асахад үйлдлийн систем ачааллахаас өмнө ажилладаг програм?",
    answers: [
      {
        label: "BIOS / UEFI",
        answerYn: true,
      },
      {
        label: "Kernel ",
        answerYn: false,
      },
      {
        label: "Driver ",
        answerYn: false,
      },
    ],
  },
  {
    id: 12,
    category: 6,
    level: 6,
    label: '"Creative Commons Zero (CC0)" лиценз ямар утгатай вэ?',
    answers: [
      {
        label: "Зөвхөн ашгийн бус зорилгоор ашиглана ",
        answerYn: false,
      },
      {
        label: "Зохиогчийн нэрийг заавал дурдах ёстой",
        answerYn: false,
      },
      {
        label: "Зохиогчийн эрхээс бүрэн татгалзсан",
        answerYn: true,
      },
    ],
  },
  {
    id: 13,
    category: 7,
    level: 7,
    label: "Ping команд ямар үүрэгтэй вэ?",
    answers: [
      {
        label: "Интернэтийн хурд хэмжих",
        answerYn: false,
      },
      {
        label: "Вирус хайх",
        answerYn: false,
      },
      {
        label: "Сүлжээний холболт байгаа эсэхийг шалгах ",
        answerYn: true,
      },
    ],
  },
  {
    id: 14,
    category: 0,
    level: 7,
    label: ': =LEFT("Mandal", 3) функцийн хариу?',
    answers: [
      {
        label: "dal",
        answerYn: false,
      },
      {
        label: "Man",
        answerYn: true,
      },
      {
        label: "M",
        answerYn: false,
      },
    ],
  },
  {
    id: 15,
    category: 1,
    level: 8,
    label: 'Word дээр "Style" ашиглахын хамгийн том давуу тал?',
    answers: [
      {
        label: "Гарчиг автоматаар үүсгэх боломжтой болно",
        answerYn: true,
      },
      {
        label: "Текст гоё харагдана",
        answerYn: false,
      },
    ],
  },
  {
    id: 16,
    category: 4,
    level: 8,
    label: "DDoS халдлагыг зогсоох энгийн арга байдаг уу?",
    answers: [
      {
        label: "Компьютерээ унтраах",
        answerYn: false,
      },
      {
        label: "Байхгүй, ISP-ийн тусламж хэрэгтэй",
        answerYn: true,
      },
    ],
  },
];
