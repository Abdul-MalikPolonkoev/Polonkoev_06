import { Navbar } from '../../../widgets/Navbar'
import cls from './HomePage.module.scss'

export const HomePage = () => {

    return (
        <div className={cls.home}>
            <div className="container">
                <div className={cls.home_wrap}>
                    <Navbar/>
                    <div>
                        <h1 className={cls.text_logotype}>
                            Design your interor with high quality.
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}