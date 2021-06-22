import illustrationImg from '../assets/images/illustration.svg'
import logoImg from '../assets/images/logo.svg'
import googleIconImg from '../assets/images/google-icon.svg'

export function Home () {
  return (
    <div>
      <aside>
        <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
        <strong>Crie salas de Q&amp;A ao-vivo </strong>
        <p>Tire as dúvidas de sua audiência em tempo-real</p>

        <main>
          <div>
            <img src={logoImg} alt="Letmeask"/>
            <img src={googleIconImg} alt="Logo do Google"/>
            <button>
              Crie sua sala no Google
            </button>
            <div>ou entre em uma sala</div>
            <form>
              <input 
                type="text"
                placeholder="Digite o código da sala"
              />
              <button type="submit"> Entrar na sala </button>
            </form>
          </div>
        </main>
      </aside>
    </div>
  )
}