export default {
  name: 'q-page-container',
  inject: ['layout'],
  computed: {
    computedStyle () {
      const css = {}

      if (this.layout.header.space) {
        css.paddingTop = `${this.layout.header.size}px`
      }
      if (this.layout.right.space) {
        css.paddingRight = `${this.layout.right.size}px`
      }
      if (this.layout.footer.space) {
        css.paddingBottom = `${this.layout.footer.size}px`
      }
      if (this.layout.left.space) {
        css.paddingLeft = `${this.layout.left.size}px`
      }

      return css
    }
  },
  render (h) {
    return h('div', {
      staticClass: 'q-layout-page-container',
      style: this.computedStyle
    }, [
      this.$slots.default
    ])
  }
}
