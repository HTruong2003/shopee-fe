import { NavLink } from 'react-router-dom'
import routes from '~/config/routes'
import logo_login from '~/assets/image/logo_login.png'
import { ShowPassword } from '~/utils/svgIcons'
import { useState } from 'react'
import icons from '~/utils/icons'

const { FcGoogle } = icons

const Login = () => {
    const [formInput, setFormInput] = useState<{
        username: string
        password: string
    }>({
        username: '',
        password: '',
    })
    const [showPassword, setShowPassword] = useState<boolean>(false)

    return (
        <div className="w-full">
            <div className="h-[84px] bg-white flex justify-center">
                <div className="w-main flex items-center justify-between">
                    <div className="flex items-center">
                        <div>
                            <NavLink className="w-[18%]" to={`${routes.HOME}`}>
                                <img
                                    src={logo_login}
                                    alt="Logo_login"
                                    className="w-40 h-auto cursor-pointer"
                                />
                            </NavLink>
                        </div>
                        <h1 className="text-3xl text-[#222222] pt-4 ml-4">
                            Đăng nhập
                        </h1>
                    </div>
                    <span className="text-main text-[14px] pt-4">
                        Bạn cần giúp đỡ?
                    </span>
                </div>
            </div>
            <div className="bg-[#ed4d2d] h-[600px] flex justify-center">
                <div className=" w-[1040px] bg-custom h-full flex items-center">
                    <div className="w-full h-[452px]">
                        <div className="bg-white h-full rounded shadow-form_auth w-[400px] float-right">
                            <h2 className="w-full px-[30px] py-[22px] text-xl text-[#222]">
                                Đăng nhập
                            </h2>
                            <div className="px-[30px] pb-[30px]">
                                <input
                                    type="text"
                                    placeholder="Email/Tên đăng nhập"
                                    className="focus:border-black outline-none rounded-sm border border-solid border-[rgba(0, 0, 0, .14)] p-3 shadow-input_auth w-full mb-5"
                                    value={formInput.username}
                                    onChange={(e) =>
                                        setFormInput({
                                            ...formInput,
                                            username: e.target.value,
                                        })
                                    }
                                />
                                <div className="focus-within:border-black flex items-center rounded-sm shadow-input_auth border border-solid border-[rgba(0, 0, 0, .14)] mb-5">
                                    <input
                                        type={
                                            showPassword ? 'text' : 'password'
                                        }
                                        placeholder="Mật khẩu"
                                        className=" p-3 w-full outline-none"
                                        value={formInput.password}
                                        onChange={(e) =>
                                            setFormInput({
                                                ...formInput,
                                                password: e.target.value,
                                            })
                                        }
                                    />
                                    <button
                                        onClick={() =>
                                            setShowPassword(!showPassword)
                                        }
                                        className="pl-3 pr-4 bg-transparent outline-none border-none"
                                    >
                                        <ShowPassword />
                                    </button>
                                </div>
                                <button
                                    disabled
                                    className={`px-[10px] mb-[10px] rounded-sm w-full bg-main ${
                                        formInput.username !== '' &&
                                        formInput.password !== ''
                                            ? 'cursor-pointer opacity-[1]'
                                            : 'cursor-not-allowed opacity-[0.7]'
                                    } text-white py-[10px]`}
                                >
                                    Đăng nhập
                                </button>
                                <NavLink
                                    to={routes.FORGOT_PASSWORD}
                                    className="text-[#05a] text-xs"
                                >
                                    Quên mật khẩu
                                </NavLink>
                                <div className="w-full flex items-center mt-1">
                                    <div className="bg-[#dbdbdb] flex-1 h-[1px]"></div>
                                    <span className="text-xs text-[#ccc] px-4 w-1/5 text-center">
                                        HOẶC
                                    </span>
                                    <div className="bg-[#dbdbdb] flex-1 h-[1px]"></div>
                                </div>
                                <button className="hover:bg-[rgba(0, 0, 0, .02)] mt-5 px-10 gap-2 m-auto rounded-sm bg-white flex items-center justify-center border border-solid border-[rgba(0, 0, 0, .26)] text-[rgba(0, 0, 0, .87)] text-[18px] h-10">
                                    <FcGoogle size={24} />
                                    <span className="pt-[3px]">Google</span>
                                </button>
                                <div className="mt-[30px] text-[14px] text-[rgba(0, 0, 0, .26)] text-center">
                                    Bạn mới biết đến Shopee?
                                    <NavLink
                                        to={routes.REGISTER}
                                        className="text-main ml-1"
                                    >
                                        Đăng ký
                                    </NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
