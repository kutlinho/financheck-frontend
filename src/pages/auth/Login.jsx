import React, {useRef} from 'react';
import CustomCard from "../../components/CustomCard/CustomCard.jsx";
import Banner from "../../assets/financheck-logo.svg"
import {InputText} from 'primereact/inputtext';


function Login() {
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);

    return (
        <div className="flex flex-col justify-center items-center gap-5 h-screen w-full">

            <img src={Banner} className="h-16" alt="logo"/>
            <CustomCard
                bodyClassName="flex flex-col items-center font-300 gap-5"
                headerClassName="text-center pt-16"
                header="Hesabınıza Giriş Yapın"
                width="w-[753px]"
                height="h-[545px]"
            >
                Uygulamaya giriş yapabilmek için kullanıcı adı ve şifrenizi girin

                <InputText
                    ref={usernameRef}
                    placeholder="Kullanıcı Adı"
                    className="w-[327px]"
                />

                <InputText
                    ref={passwordRef}
                    type="password"
                    placeholder="Şifre"
                    className="w-[327px]"
                />

            </CustomCard>

        </div>
    );
}

export default Login;