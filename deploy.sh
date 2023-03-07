echo "Switching to branch master"
git checkout master

echo "Building app..."
npm run build

echo "Deploying files to server..."
scp -r dist/* eamon@172.105.106.226:/var/www/172.105.106.226/

echo "Done!"