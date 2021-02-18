import os
from typing import Any, Dict, Iterator
from database.connection import Connection


__all__ = ('Memgraph',)


class Memgraph:
    def __init__(self,
                 host: str = None,
                 port: int = None,
                 username: str = '',
                 password: str = '',
                 encrypted: bool = None):
        self._host = host
        self._port = port
        self._username = username
        self._password = password
        self._encrypted = encrypted
        self._cached_connection = None

    def execute_and_fetch(self,
                          query: str,
                          connection: Connection = None) -> Iterator[Dict[str, Any]]:
        """Executes Cypher query and returns iterator of results."""
        connection = connection or self._get_cached_connection()
        return connection.execute_and_fetch(query)

    def execute_query(self,
                      query: str,
                      connection: Connection = None) -> None:
        """Executes Cypher query without returning any results."""
        connection = connection or self._get_cached_connection()
        return connection.execute_query(query)

    def _get_cached_connection(self) -> Connection:
        """Returns cached connection if it exists, creates it otherwise"""
        if self._cached_connection is None or not self._cached_connection.is_active():
            self._cached_connection = self.new_connection()

        return self._cached_connection

    def new_connection(self) -> Connection:
        """Creates new Memgraph connection"""
        args = dict(
            host=self._host,
            port=self._port,
            username=self._username,
            password=self._password,
            encrypted=self._encrypted)
        return Connection.create(**args)
