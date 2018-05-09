
A small server to test 2 pass rendering to update style after SSR


### what I learned

There are 3 stages in a React Compoent while SSR

###### stage 1 : in the server

`typeof window == 'undefined' `

###### stage 2 : hydrating

`!this.state.hasMounted && typeof window !== 'undefined'`

###### stage 3 : 2nd rendering

`this.state.hasMounted`


<hr />

`stage 2` and `stage 3` should render different vDOM, or React won't update DOM

```
constructor(props) {
  super(props)
  this.state = { hasMounted: false }

  this.styles = Object.defineProperties({}, {
    'container': { get: _=> {
       if (typeof window == 'undefined') return { height: 300 }
       let height = this.props.viewsize.height * 0.67
       return this.state.hasMounted ? { height } : { height: height - 1 }
    }}
  })
}

componentDidMount() {
    this.setState({ hasMounted: true })
}

render() {
  let s = this.styles
  return (
    <div  style={s['container']}>
  </div>
  )
}

```
