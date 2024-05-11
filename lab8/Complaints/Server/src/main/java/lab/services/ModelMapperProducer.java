package lab.services;

import jakarta.enterprise.inject.Produces;
import jakarta.enterprise.context.ApplicationScoped;
import org.modelmapper.ModelMapper;

@ApplicationScoped
public class ModelMapperProducer {
    @Produces
    ModelMapper getModelMapper() {return new ModelMapper();}
}
