install:
	npm install

start:
	node bin/brain-games.js
	
brain-even:
	node bin/brain-even.js

publish:
	npm publish --dry-run

lint:
	npx eslint .