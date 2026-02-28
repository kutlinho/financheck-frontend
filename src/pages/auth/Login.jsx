import React, {useRef} from 'react';
import CustomCard from "../../components/CustomCard/CustomCard.jsx";
import Banner from "../../assets/financheck-logo.svg"
import {InputText} from 'primereact/inputtext';
import CustomButton from "../../components/CustomButton/CustomButton.jsx";
import {FcGoogle} from "react-icons/fc";


function Login({isRegister}) {
    const firstNameInputRef = useRef(null);
    const lastNameInputRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const passwordCheckRef = useRef(null);


    const customHeader = isRegister ? "Financheck’e Kaydolun" : "Hesabınıza Giriş Yapın"
    const cardText = isRegister ? "Uygulamayı kullanabilmek için aşağıdaki bilgileri doldurarak kaydolun."
        : "Uygulamaya giriş yapabilmek için kullanıcı adı ve şifrenizi girin"
    const buttonLabel = isRegister ? "Kaydolun" : "Giriş Yapın"

    return (<div className="flex flex-col justify-center items-center gap-5 h-full w-full py-3">

        <img src={Banner} className="h-16" alt="logo"/>
        <CustomCard
            bodyClassName="flex flex-col items-center font-300 gap-5"
            headerClassName="text-center pt-16"
            header={customHeader}
            width="w-[753px]"
        >
            {cardText}

            {isRegister && <InputText
                ref={firstNameInputRef}
                placeholder="İsim"
                className="w-[327px]"
            />}

            {isRegister && <InputText
                ref={lastNameInputRef}
                placeholder="Soyisim"
                className="w-[327px]"
            />}

            <InputText
                ref={emailRef}
                placeholder="Email"
                className="w-[327px]"
            />

            <InputText
                ref={passwordRef}
                type="password"
                placeholder="Şifre"
                className="w-[327px]"
            />

            {isRegister && <InputText
                ref={passwordCheckRef}
                type="password"
                placeholder="Şifre Tekrar"
                className="w-[327px]"
            />}

            <CustomButton className="w-[327px]" type="primary" label={buttonLabel}/>

            <div className="flex items-center w-[327px]">
                <div className="border-t border-gray-300 min-w-12 w-36"></div>
                <span className="mx-4 text-sm text-gray-500 font-medium">
                        veya
                    </span>
                <div className="border-t border-gray-300 min-w-12 w-36"></div>
            </div>

            <CustomButton className="w-[327px]" type="alternative" label="Google ile Giriş Yapın" icon={<FcGoogle/>}/>

            {isRegister ?
                <p className="text-sm">Mevcut Hesabınız var mı? <a href="/login" target="_blank"
                                                                   className="text-black hover:underline">Giriş
                    Yapın</a></p>
                : <p className="text-sm">Hesabınız yok mu? <a href="/register" target="_blank"
                                                              className="text-black hover:underline">Kaydolun</a>
                </p>
            }
        </CustomCard>

    </div>);
}

export default Login;