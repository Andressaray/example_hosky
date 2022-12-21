import { ButtonProps } from "../design/atoms/Button/index.t";

const getColor = (color: ButtonProps['bg']) => {
    const colors = {
        'primary': 'bg-[#09f]',
        'danger': 'bg-[#002]',
        'purple': 'bg-[#043]',
    }

    return colors[color] || 'bg-[#09f]'
}

export default getColor