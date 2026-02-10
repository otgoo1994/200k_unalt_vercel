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
      "VLOOKUP функцийн хайж буй утга (lookup_value) хүснэгтийн аль баганад байх ёстой вэ?",
    answers: [
      { label: "Хамгийн эхний (зүүн талын) баганад", answerYn: true },
      { label: "Дурын баганад", answerYn: false },
      { label: "Хамгийн сүүлийн баганад", answerYn: false },
      { label: "Хоёр дахь баганад", answerYn: false },
    ],
  },
  {
    id: 2,
    category: 1,
    level: 1,
    label:
      "Текстийг багана (Column) болгон хуваасан үед, текстийг дараагийн баганын эхлэл рүү шилжүүлэх команд?",
    answers: [
      { label: "Enter дарах", answerYn: false },
      { label: "Page Break", answerYn: false },
      { label: "Column Break", answerYn: true },
      { label: "Tab", answerYn: false },
    ],
  },
  {
    id: 3,
    category: 2,
    level: 2,
    label: "Desktop дээр дарж байгаад Alt + F4 дарвал яах вэ?",
    answers: [
      { label: "Юу ч болохгүй", answerYn: false },
      { label: "Explorer нээгдэнэ", answerYn: false },
      { label: "Shut Down (Унтраах) цонх гарч ирнэ", answerYn: true },
      { label: "Дэлгэцийн тохиргоо гарна", answerYn: false },
    ],
  },
  {
    id: 4,
    category: 5,
    level: 2,
    label: "FAT32 файлын системийн гол дутагдал юу вэ?",
    answers: [
      { label: "Mac дээр уншдаггүй", answerYn: false },
      {
        label: "4GB-аас дээш хэмжээтэй нэг файлыг хуулж чаддаггүй",
        answerYn: true,
      },
      { label: "Вирус амархан тусдаг", answerYn: false },
      { label: "Нэр өгч болдоггүй", answerYn: false },
    ],
  },
  {
    id: 5,
    category: 4,
    level: 3,
    label:
      "2FA буюу Хоёр шатлалт баталгаажуулалтын хоёр дахь хүчин зүйл нь ихэвчлэн юу байдаг вэ?",
    answers: [
      { label: "Таны гэрийн хаяг", answerYn: false },
      {
        label: "Таны эзэмшиж буй зүйл (утас, token) эсвэл биометрикс",
        answerYn: true,
      },
      { label: "Таны төрсөн огноо", answerYn: false },
      { label: "Таны ээжийн нэр", answerYn: false },
    ],
  },
  {
    id: 6,
    category: 7,
    level: 3,
    label: ".gov.mn өргөтгөл ямар байгууллагыг илэрхийлэх вэ?",
    answers: [
      { label: "Боловсролын байгууллага", answerYn: false },
      { label: "Төрийн бус байгууллага", answerYn: false },
      { label: "Монгол Улсын төрийн байгууллага", answerYn: true },
      { label: "Хувийн компани", answerYn: false },
    ],
  },
  {
    id: 7,
    category: 3,
    level: 4,
    label:
      "Слайдуудыг жижиг дүрсээр харж, дарааллыг нь солиход хамгийн тохиромжтой горим?",
    answers: [
      { label: "Normal", answerYn: false },
      { label: "Reading View", answerYn: false },
      { label: "Slide Sorter", answerYn: true },
      { label: "Notes Page", answerYn: false },
    ],
  },
  {
    id: 8,
    category: 0,
    level: 4,
    label: "=MOD(10, 3) функц ямар хариу өгөх вэ?",
    answers: [
      { label: "3.33", answerYn: false },
      { label: "3", answerYn: false },
      { label: "1 (Үлдэгдлийг олно)", answerYn: true },
      { label: "0", answerYn: false },
    ],
  },
  {
    id: 9,
    category: 2,
    level: 5,
    label: "Текстийг үг, үгээр нь (үсгээр биш) идэвхжүүлж сонгох товчлол?",
    answers: [
      { label: "Shift + Arrow", answerYn: false },
      { label: "Ctrl + Shift + Arrow", answerYn: true },
      { label: "Alt + Arrow", answerYn: false },
    ],
  },
  {
    id: 10,
    category: 6,
    level: 5,
    label: "Passive Digital Footprint гэж юу вэ?",
    answers: [
      { label: "Таны өөрөө бичсэн пост", answerYn: false },
      {
        label: "Таныг мэдэхгүй байхад цуглуулсан мэдээлэл (IP, хайлтын түүх)",
        answerYn: true,
      },
      { label: "Хуурамч хаяг", answerYn: false },
    ],
  },
  {
    id: 11,
    category: 1,
    level: 6,
    label:
      "Баримтын зөвхөн эхний хуудсыг өөр толгой (Header)-той болгох тохиргоо?",
    answers: [
      { label: "Insert Section Break", answerYn: false },
      { label: "Design tab → Different First Page", answerYn: true },
      { label: "Format Page Number", answerYn: false },
    ],
  },
  {
    id: 12,
    category: 5,
    level: 6,
    label: "1 Gigahertz (GHz) нь секундэд хэдэн cycle вэ?",
    answers: [
      { label: "1 сая", answerYn: false },
      { label: "1 тэрбум", answerYn: true },
      { label: "1 их наяд", answerYn: false },
    ],
  },
  {
    id: 13,
    category: 0,
    level: 7,
    label: "=OR(5>10, 10>5) томьёоны хариу?",
    answers: [
      { label: "TRUE", answerYn: true },
      { label: "#VALUE!", answerYn: false },
      { label: "5", answerYn: false },
    ],
  },
  {
    id: 14,
    category: 4,
    level: 7,
    label: "Trojan Horse вирусын гол онцлог?",
    answers: [
      { label: "Өөрийгөө хуулбарладаг", answerYn: false },
      {
        label: "Хэрэгтэй програм мэт харагддаг боловч хортой үйлдэл хийдэг",
        answerYn: true,
      },
      { label: "Файлыг шифрлэдэг", answerYn: false },
    ],
  },
  {
    id: 15,
    category: 7,
    level: 8,
    label: "VPN ашиглах үед интернэтийн хурд яагаад ихэвчлэн удааширдаг вэ?",
    answers: [
      { label: "Вирус ордог учраас", answerYn: false },
      {
        label: "Өгөгдөл шифрлэж, өөр серверээр дамжуулдаг учраас",
        answerYn: true,
      },
    ],
  },
  {
    id: 16,
    category: 1,
    level: 8,
    label: "Format Painter дээр Double Click дарвал яах вэ?",
    answers: [
      { label: "Нэг удаа хуулаад идэвхгүй болно", answerYn: false },
      {
        label: "Форматыг олон газар дараалан хуулах боломжтой болно",
        answerYn: true,
      },
    ],
  },
];
