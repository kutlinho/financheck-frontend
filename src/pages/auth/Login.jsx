import React, {useRef} from 'react';
import CustomCard from "../../components/CustomCard/CustomCard.jsx";
import Banner from "../../assets/financheck-logo.svg"
import {InputText} from 'primereact/inputtext';
import CustomButton from "../../components/CustomButton/CustomButton.jsx";
import {FcGoogle} from "react-icons/fc";


function Login() {
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);

    return (<div className="flex flex-col justify-center items-center gap-5 h-screen w-full">

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
            <CustomButton className="w-[327px]" type="primary" label="Giriş Yapın"/>

            <div className="flex items-center w-[327px]">
                <div className="border-t border-gray-300 min-w-12 w-36"></div>
                    <span className="mx-4 text-sm text-gray-500 font-medium">
                        veya
                    </span>
                <div className="border-t border-gray-300 min-w-12 w-36"></div>
            </div>

            <CustomButton className="w-[327px]" type="alternative" label="Google ile Giriş Yapın" icon={<FcGoogle />} />

            <p className="text-sm">Hesabınız yok mu? <a href="/register" target="_blank" className="text-black hover:underline">Kaydolun</a>
            </p>
        </CustomCard>

    </div>);
}

export default Login;