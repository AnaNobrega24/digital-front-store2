const Login = () => {
    return ( 
        <div>
            <div className="bg-white p-[30px] rounded xl:w-[580px]">
                <form>
                    <h4 className="text-center text-[22px] leanding-[34px] font-bold xl:text-left xl:mb-5">Acesse sua conta</h4>
                    <p className="text-grafite text-center mb-[30px] xl:text-left ">Novo cliente? Então registra-se <a href=""
                    className="underline hover:text-rosa">aqui</a>.</p>
                    <label>Login *</label>
                    <input 
                    type="text"
                    placeholder="Insira seu lçogin ou e-mail" 
                    className="bg-grafite/5 rounded w-full mb-5"
                    />

                </form>
            </div>
            <div className="hidden">

            </div>
        </div>
    );    
}
 
export default Login;