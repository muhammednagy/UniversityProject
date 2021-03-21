# Awesome HI

### Installing locally

```
sudo apt update
sudo apt-get install -y imagemagick libmagickwand-dev   git curl libssl-dev libreadline-dev zlib1g-dev autoconf bison build-essential        libyaml-dev libreadline-dev libncurses5-dev libffi-dev libgdbm-dev --fix-missing
curl -sL https://github.com/rbenv/rbenv-installer/raw/master/bin/rbenv-installer | bash -
echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.bashrc
echo 'eval "$(rbenv init -)"' >> ~/.bashrc
exec $SHELL
rbenv install 3.0.0
rbenv global 3.0.0
```

Install postgres and update `config/database.yml`
if postgres is not installed then you can run it with `docker run --name postgres -e POSTGRES_PASSWORD=dbpass  -p 5432:5432 -d postgres

install redis and update `config/redis.yml`
if redis is not installed then you can run it with  `sudo docker run --name my-redis-container -p 6379:6379 -d redis`