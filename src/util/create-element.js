export function div(text=null) {
    const $div = document.createElement('div');
    if (text) $div.textContent = text;
    return $div;
}

export function button(text='button text') {
    const $button = document.createElement('button');
    $button.textContent = text;
    return $button;
}