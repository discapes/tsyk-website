set -euo pipefail
aws ecr get-login-password --region eu-north-1 | docker login --username AWS --password-stdin 861821644425.dkr.ecr.eu-north-1.amazonaws.com
docker build . -t 861821644425.dkr.ecr.eu-north-1.amazonaws.com/eliittilukio-frontend
docker push 861821644425.dkr.ecr.eu-north-1.amazonaws.com/eliittilukio-frontend

# on server, docker compose pull