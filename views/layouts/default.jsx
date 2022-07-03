const React = require('react')

function DefaultLayout(props) {
    return (
        <html lang="en">
            <meta charSet="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>

                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
                    integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
                    crossOrigin="anonymous"/>

                <head><title>{props.title}</title></head>
                <body>{props.children}</body>
        </html>
    )
}

module.exports = DefaultLayout