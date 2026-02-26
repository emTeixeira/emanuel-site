export interface Testimonial {
  name: string;
  role: string;
  text: string;
  image?: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Dra. Camila Souza",
    role: "Clínica Odontológica",
    text: "O site ficou incrível! Superou minhas expectativas e transmite exatamente a imagem que eu queria para meu trabalho.",
  },
  {
    name: "Robson Cardoso",
    role: "Escritório de Advocacia",
    text: "Fiquei muito satisfeito com o site de advocacia desenvolvido pelo Emanuel. O resultado ficou moderno, organizado e transmite exatamente a imagem profissional que eu queria passar.",
  },
  {
    name: "Elisângela Cordeiro",
    role: "Eli Cordeiro Doces",
    text: "Amei o site que o Emanuel criou para a Eli Cordeiro Doces. Ficou lindo, organizado e transmite todo o carinho que coloco em cada doce. Recomendo muito!",
  },
  // {
  //   name: "Pedro Augusto Lima",
  //   role: "Academia FitPower",
  //   text: "Desde que lançamos o novo site, nossas matrículas online cresceram 40%. O design é moderno e transmite exatamente a energia que queríamos.",
  // },
  // {
  //   name: "Juliana Costa",
  //   role: "Consultório de Psicologia",
  //   text: "Trabalhar com o Emanuel foi incrível. Ele entendeu perfeitamente o tom delicado que precisávamos e entregou um site acolhedor e profissional.",
  // },
];
