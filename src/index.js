import join from 'lodash/join';

const component = () => {
    const element = document.createElement('div');
    element.innerHTML = join(['Hello', 'webpack'], ' ');
    return element;
}

document.body.appendChild(component());
