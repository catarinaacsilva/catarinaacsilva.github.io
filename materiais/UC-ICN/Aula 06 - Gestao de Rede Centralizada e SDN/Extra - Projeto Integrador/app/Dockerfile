FROM python:3.14-slim
WORKDIR /srv
COPY pyproject.toml .
COPY ticketrush ticketrush
RUN pip install --no-cache-dir . && useradd -r app
USER app
# API (por omissao); o worker substitui o comando: python -m ticketrush.worker
CMD ["gunicorn", "-b", "0.0.0.0:8000", "-w", "2", "ticketrush.api:app"]
