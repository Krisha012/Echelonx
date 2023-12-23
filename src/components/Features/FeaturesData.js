//------------ Import react-icons ------------ 
import { MdRadioButtonChecked } from 'react-icons/md'
import { BsStars, BsStack } from 'react-icons/bs'
import { HiOutlineRocketLaunch } from 'react-icons/hi2'
//------------ Import Features Images ------------ 
import Feture1 from "../../assets/Image/features-1.png";
import Feture2 from "../../assets/Image/features-2.png";
import Feture3 from "../../assets/Image/features-3.png";

//------------ Start Features data -----------
export const FetureData = [
    {
        Images: Feture1,
        Icon: <BsStars className='text-3xl text-blue-500 text-center' />,
        Heading: "Clean & Minimal Design",
        Detail:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor aliqua.",
        listIcon: <MdRadioButtonChecked className='text-base text-blue-500' />,
        list1: "Busion Landing Page",
        list2: " Bootstrap Html Css Design.",
        list3: " Clean & Creative.",
        btn: "Read More",
    },
    {
        Images: Feture2,
        Icon: <BsStack className='text-3xl text-blue-500 text-center' />,
        Heading: "Planing & Strategy",
        Detail:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor aliqua.",
        listIcon: <MdRadioButtonChecked className='text-base text-blue-500' />,
        list1: "Busion Landing Page.",
        list2: " Bootstrap Html Css Design.",
        list3: " Clean & Creative.",
        btn: "Read More",
    },
    {
        Images: Feture3,
        Icon: <HiOutlineRocketLaunch className='text-3xl text-blue-500 text-center' />,
        Heading: "Elegant & Modern Design",
        Detail:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor aliqua.",
        listIcon: <MdRadioButtonChecked className='text-base text-blue-500' />,
        list1: "Busion Landing Page",
        list2: " Bootstrap Html Css Design.",
        list3: " Clean & Creative.",
        btn: "Read More",
    },
];
//------------ End Features data -----------
