import { createServer } from 'http'

const server = createServer((req, res) => {
	res.writeHead(200, {'content-type': 'text/html; charset=utf-8'})
	//res.write('Hello Node.js\n')
	const url = new URL(req.url, 'http://localhost:8080')
	debugger;
	const body = `<!DOCTYPE html>
	<html lang="fr">
		<head>
			<meta charset="UTF-8"/>
			<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
			<link rel="stylesheet" href="./components/css/index.css"/>
			<link rel="stylesheet" href="src/bootstrap/css/bootstrap-grid.css"/>
			<link rel="stylesheet" href="src/bootstrap/css/bootstrap.css"/>
			<link rel="stylesheet" href="src/bootstrap/css/bootstrap-grid.min.css"/>
			<link rel="stylesheet" href="src/bootstrap/css/bootstrap-grid.min.css"/>
			<link rel="stylesheet" href="src/bootstrap/css/bootstrap-utilities.css"/>
			<link rel="stylesheet" href="src/bootstrap/css/bootstrap-utilities.min.css"/>
			<link rel="stylesheet" href="src/bootstrap/css/bootstrap-reboot.css"/>
			<link rel="stylesheet" href="src/bootstrap/css/bootstrap-reboot.min.css"/>
			<title>Public_school</title>
		</head>
		<body>
			<div class="container-fluid bg">
				<div class="row">
					<div class="col-md-12 col-12 col-lg-12">
						<div class="header text-center">
						<h1 class="title__big">Website for presenting school</h1>
							<p class="text_simple">just for the player!</p> 
							<div class="text_simple">
								hello me am :<p style="color:green">${url.searchParams.get('name')}</p>
								aged of : <p style="color:red">${url.searchParams.get('age')}</p>
							</div>
							<button class="button_simple">
								<a href="#" class="simple_link">Read more</a>
								<svg class="svg" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1024 1024">
									<path fill="#fff" d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 0 0 0-48.4z"/>
								</svg>
							</button>
						</div>
					</div>
				</div>
			</div>
		</body>
	</html>`
	//res.write('./src/index.html')
	res.end(body)
})


// listen to the port
console.log('listen')
server.listen(3000, () => {
	console.log(
		`Server is listening to http://localhost:${server.address().port}`
	)
})