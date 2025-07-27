import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from "./App.module.css"

import "./global.css"

// author: { avatarUrl: string; name: string; role: string; }
// publishedAt: Date;
// content: string[];

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: "https://www.github.com/akitaonrails.png",
      name: "Fabio Akita",
      role: "Co-Founder Codeminer42"
    },
    content: [
      { type: "paragraph", content: "Tem dias que tudo parece um filme indie em câmera lenta." },
      { type: "paragraph", content: "O céu meio nublado, a playlist triste tocando no fundo e aquele sentimento de que tá tudo meio fora do lugar…" },
      { type: "paragraph", content: 'Mas aí você vê alguém sorrindo na rua, ou escuta um "bom dia" sincero e as coisas se alinham por 5 segundos.' },
      { type: "paragraph", content: "Pequenas coisas ainda importam. Muito." },
      { type: "paragraph", content: "🎶 Trilha do momento:" },
      { type: "link", content: "https://www.youtube.com/watch?v=8UVNT4wvIGY" },
      { type: "hashtag", content: ["SaúdeMental", "ProdutividadeTóxica", "Desacelera", "ViverÉMaisQuePostar"] },
    ],
    publishedAt: new Date("2025-07-26 20:38:00")
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://www.github.com/danielhe4rt.png",
      name: "Daniel Reis",
      role: "Founded He4rt Developers"
    },
    content: [
      { type: "paragraph", content: "Eu até gosto de programar, o problema é que…" },
      { type: "paragraph", content: "🔹 O código funciona num dia e quebra do nada no outro" },
      { type: "paragraph", content: '🔹 As 3 da manhã o bug some do nada' },
      { type: "paragraph", content: "🔹 Stack Overflow é minha religião" },
      { type: "paragraph", content: "🔹 E o cliente sempre pede “só um botãozinho”" },
      { type: "paragraph", content: "Programar é igual montar Lego com peças que mudam de forma quando você vira de costas." },
      { type: "paragraph", content: "🧱✨" },
      { type: "hashtag", content: ["VidaDeDev", "FrontendWarrior", "JavaScriptNãoPerdoa"] },
      { type: "paragraph", content: "💻 Ferramentas que me salvaram essa semana:" },
      { type: "link", content: "https://devdocs.io" },
      { type: "link", content: "https://caniuse.com" },
      { type: "link", content: "https://css-tricks.com" },
      { type: "paragraph", content: "Força pra quem tá no mesmo barco. 🌊" }
    ],
    publishedAt: new Date("2025-06-02 10:28:00")
  },
  {
    id: 3,
    author: {
      avatarUrl: "https://www.github.com/filipedeschamps.png",
      name: "Filipe Deschamps",
      role: "Founder curso.dev"
    },
    content: [
      { type: "paragraph", content: "As redes sociais estão virando vitrines de ansiedade coletiva." },
      { type: "paragraph", content: "Todo mundo tentando parecer interessante, bem resolvido e feliz o tempo todo," },
      { type: "paragraph", content: "enquanto por dentro tá todo mundo no modo “salve-se quem puder”." },
      { type: "paragraph", content: "Likes viraram validação, stories viraram disputa, e ninguém mais consegue só… existir." },
      { type: "paragraph", content: "Talvez o que falte seja menos filtro e mais verdade." },
      { type: "hashtag", content: ["DesabafosDigitais", "VidaRealImporta", "OfflineTambémÉVida"] }
    ],
    publishedAt: new Date("2025-01-14 06:52:00")
  }
]

export default function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>
    </>
  )
}