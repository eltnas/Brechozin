import "./Login.css";

const Login = () => {
    return (
        <div className="Login__container">
            <div className="content">
                <div className="data-entry">
                    <input type="text" name="txt_usuario" id="txt_senha" placeholder="Usuário" />
                </div>

                <div className="data-entry">
                    <input type="password" name="txt_senha" id="txt_senha" placeholder="Senha" />
                </div>

                <div className="data-entry">
                    <button>
                        Entrar
                    </button>
                </div>


            </div>
        </div>
    )
}

export default Login;