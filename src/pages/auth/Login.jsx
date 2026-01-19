import React from 'react';
import CustomCard from "../../components/CustomCard/CustomCard.jsx";

function Login() {
    return (
        <div className="flex justify-center align-center h-full w-full">
        <CustomCard
            bodyClassName="font-300"
        headerClassName="text-center pt-16"
        header="Hesabınıza Giriş Yapın"
        width="w-[753px]"
        height="h-[545px]"
        >
        Uygulamaya giriş yapabilmek için kullanıcı adı ve şifrenizi girin
        </CustomCard>
        </div>
    );
}

export default Login;