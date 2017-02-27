import cn from './EffectButton.pcss'
import template from './EffectButton.html'
import getIcon from '../../tools/get-icon'

const EffectButton = (props) => {
  const {effect, title, applied, onClick} = props
  const icon = getIcon(effect)

  const elementContainer = document.createElement('div')

  elementContainer.innerHTML = template({
    title,
    cn,
    icon,
  })

  const element = elementContainer.querySelector(`.${cn['effect-button']}`)

  if (applied) {
    element.classList.add(cn['effect-button_applied'])
  }
  element.addEventListener('click', () => {
    if (element.getAttribute('aria-disabled') === 'true') return

    onClick()
  })

  const getElement = () => element

  const setApplied = (newApplied) => {
    if (element) {
      if (newApplied) {
        element.classList.add(cn['effect-button_applied'])
      }
      else {
        element.classList.remove(cn['effect-button_applied'])
      }
    }
  }

  return {
    getElement,
    setApplied,
  }
}

export default EffectButton