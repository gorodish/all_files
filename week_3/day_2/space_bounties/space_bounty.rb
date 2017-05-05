require('pg')
class SpaceBounty

  attr_reader  :name, :species, :location, :bounty

  def initialize(options)
    @id = options['id'] if options['id'] != nil
    @name = options['name']
    @species = options['species']
    @location = options['location']
    @bounty = options['bounty']
  end

  def save()
    db = PG.connect({ dbname: 'space_bounties', host: 'localhost' })
    sql = "INSERT INTO bounties (name, species, location, bounty) VALUES ('#{@name}', '#{@species}', '#{@location}', '#{@bounty}') returning * ;"
    @id = db.exec(sql).first["id"].to_i
    db.close()

  end

  def update()
    db = PG.connect({ dbname: 'space_bounties', host: 'localhost' })
    sql = "UPDATE bounties SET (name, species, location, bounty) = ('#{@name}', '#{@species}', '#{@location}', '#{@bounty}') WHERE id = #{@id};"
    db.exec(sql)
    db.close

  end

  def delete()
    db = PG.connect({ dbname: 'space_bounties', host: 'localhost' })
    sql = "DELETE FROM bounties WHERE id = #{@id};"
    db.exec(sql)
    db.close

  end

#class methods

  def self.all()
    db = PG.connect({ dbname: 'space_bounties', host: 'localhost' })
    sql = "SELECT * FROM bounties;"
    bounties = db.exec(sql)
    db.close
    return bounties.map { |bounty| SpaceBounty.new(bounty)}


  end

  def self.delete_all()
    db = PG.connect({ dbname: 'space_bounties', host: 'localhost' })
    sql = "DELETE FROM bounties;"
    db.exec(sql)
    db.close
  end

end