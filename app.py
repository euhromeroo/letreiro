import sqlite3

# Conectar ao banco de dados (ou criar se não existir)
conn = sqlite3.connect('clientes.db')
cursor = conn.cursor()

# Criar a tabela de clientes
cursor.execute('''
CREATE TABLE IF NOT EXISTS clientes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nome TEXT NOT NULL,
    email TEXT NOT NULL,
    telefone TEXT,
    endereco TEXT
)
''')
conn.commit()

# Função para inserir cliente
def adicionar_cliente():
    nome = input("Digite o nome do cliente: ")
    email = input("Digite o email do cliente: ")
    telefone = input("Digite o telefone do cliente: ")
    endereco = input("Digite o endereço do cliente: ")

    cursor.execute('''
        INSERT INTO clientes (nome, email, telefone, endereco)
        VALUES (?, ?, ?, ?)
    ''', (nome, email, telefone, endereco))
    conn.commit()
    print("✅ Cliente adicionado com sucesso!\n")

# Função para listar clientes
def listar_clientes():
    cursor.execute("SELECT * FROM clientes")
    clientes = cursor.fetchall()
    
    print("\n📋 Lista de Clientes:")
    for cliente in clientes:
        print(f"ID: {cliente[0]} | Nome: {cliente[1]} | Email: {cliente[2]} | Telefone: {cliente[3]} | Endereço: {cliente[4]}")

# Execução do programa
while True:
    print("\n1 - Adicionar Cliente")
    print("2 - Listar Clientes")
    print("3 - Sair")
    opcao = input("Escolha uma opção: ")

    if opcao == '1':
        adicionar_cliente()
    elif opcao == '2':
        listar_clientes()
    elif opcao == '3':
        print("Encerrando programa.")
        break
    else:
        print("Opção inválida. Tente novamente.")

# Fechar conexão
conn.close()
