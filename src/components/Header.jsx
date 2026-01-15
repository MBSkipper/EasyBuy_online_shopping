

const brandStyle = {
    backgroundColor: '#B3DEE5',
    borderRadius: '0.20em',
    padding:'0.2em'
}

function Header() {
    return (
        <div>
            <h1 className="display-2">Welcome to {' '} {/* NOTE the {' '} adds a space */}
                <span style={brandStyle}>EasyBuy</span>
            </h1>
            <p className="lead fs-2 mt-4">Get the best deals online</p>
            <p className="fs-5">
                Built with React
            </p>

        </div>

    )

}

export default Header