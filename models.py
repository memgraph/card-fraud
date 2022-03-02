from gqlalchemy import Node, Relationship, Field
from card_fraud import memgraph


class Card(Node):
    id: str = Field(index=True, unique=True, db=memgraph)
    compromised: bool = Field(default=False, db=memgraph)


class Pos(Node):
    id: str = Field(index=True, unique=True, db=memgraph)
    compromised: bool = Field(default=False, db=memgraph)


class Transaction(Node):
    id: str = Field(index=True, unique=True, db=memgraph)
    fraudReported: bool = Field(default=False, index=True, db=memgraph)


class Using(Relationship):
    pass


class At(Relationship):
    pass
