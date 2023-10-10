import './content.css'
import logo from '../images/logoNCC 1.png'
import css from '../images/css-icon 1.png'
import html from '../images/html-icon 1 (1).png'
import url from '../images/url-icon 1.png'
function Content() {
    return (
        <>
            <div className='Content'>
                <div className='container'>
                    <div className='Content__logo'>
                        <img src={logo} alt=''></img>
                    </div>
                    <div className='Content__text'>
                        <div className='Content__text-title'>
                            Lorem ipsum dolor sit asmet?
                        </div>

                        <div className='Content__text-content'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique consequat placerat. Vestibulum auctor pellentesque sem, eu posuere erat hendrerit quis. Maecenas vel consequat turpis. Nam facilisis, ligula in mattis sodales, augue justo tristique nulla, sed lacinia ante eros ut mi. Morbi vitae diam augue. Aliquam vel mauris a nibh auctor commodo. Praesent et nisi eu justo eleifend convallis. Quisque suscipit maximus vestibulum. Phasellus congue mollis orci, sit amet luctus augue tristique eu. Donec vulputate odio neque, sed semper turpis pellentesque a.
                        </div>
                    </div>
                    <div className='Content__options'>
                        <div className='Content__options-item'>
                            <div className='Content__options-title'>
                                Lorem ipsum dolor sit asmet
                            </div>
                            <div className='Content__options-main'>
                                <div className='Content__options-img'>
                                    <img src={css} alt='Image' />
                                </div>
                                <div className='Content__options-text'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.
                                </div>
                            </div>
                        </div>
                        <div className='Content__options-item'>
                            <div className='Content__options-title'>
                                Lorem ipsum dolor sit asmet
                            </div>
                            <div className='Content__options-main'>
                                <div className='Content__options-img'>
                                    <img src={html} />
                                </div>
                                <div className='Content__options-text'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.
                                </div>
                            </div>
                        </div>
                        <div className='Content__options-item'>
                            <div className='Content__options-title'>
                                Lorem ipsum dolor sit asmet
                            </div>
                            <div className='Content__options-main'>
                                <div className='Content__options-img'>
                                    <img src={url} />
                                </div>
                                <div className='Content__options-text'>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non dui sodales, faucibus libero ut, posuere felis. Donec imperdiet suscipit accumsan. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices liquam egestas nunc at ullamcorper ultricies. Donec feugiat velit nulla, vel sodales est ullamcorper id. Aenean consequat condimentum velit ut tempor. Nam porta massa in metus bibendum congue. Pellentesque ultrices vestibulum mattis.
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <div className='Footer'>
                        Copyright@ 2021
                    </div>

                </div>
            </div>
        </>
    )
}
export default Content