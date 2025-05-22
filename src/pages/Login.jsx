import { useContext } from "react";
import { LoginContest } from "../contexts/LoginContext";

const Login = () => {

    const { SetLogado } = useContext(LoginContest);


    function onLogin(event) {
        event.preventDefault();
        SetLogado(true);
        Navigate("/");
    }


    return (
        <div>
            <div className="bg-white p-[30px] rounded xl:w-[580px]">
                <form onSubmit={onLogin}>
                <h4 className="text-center text-[22px] leanding-[34px] font-bold xl:text-left xl:mb-5">Acesse sua conta</h4>
                <p className="text-grafite text-center mb-[30px] xl:text-left ">Novo cliente? Então registra-se <a href=""
                    className="underline hover:text-rosa">aqui</a>.</p>

                <label>Login *</label>
                <input
                    type="text"
                    placeholder="Insira seu lçogin ou e-mail"
                    className="bg-grafite/5 rounded w-full mb-5 h-[60px] duration-150 outline-transparent focus:outline-rosa pl-4"
                />

                <label>Senha *</label>
                <input
                    type="password"
                    placeholder="Insira sua senha"
                    className="bg-grafite/5 rounded w-full mb-[30px] h-[60px] duration-150 outline-transparent focus:outline-rosa pl-4"
                />
                <a href="" className="text-grafite underline hover:text-rosa mb-[30px] block">Esqueci minha senha</a>
                <button
                    className="w-full h-[48px] bg-rosa hover:bg-rosa-hover text-white rounded duration-150 font-bold cursor-pointer"
                >
                    Acessar Conta
                </button>
            </form>
            <div className="hidden xl:block xl:w-[580px] xl:h-[1px] bg-grafite/10 my-5">
                <p>Ou faça login com</p>
            </div>
        </div>
        </div >
    );
}

export default Login;